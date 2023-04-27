using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddHttpClient();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<IHackerNewsApiService, HackerNewsApiService>();
builder.Services.AddScoped<IBaseAPIService, BaseAPIService>();
builder.Services.AddSingleton<IUriService>(o =>
{
    var accessor = o.GetRequiredService<IHttpContextAccessor>();
    var request = accessor.HttpContext!.Request;
    var uri = string.Concat(request.Scheme, "://", request.Host.ToUriComponent());
    return new UriService(uri);
});
builder.Services.AddControllers(options =>
{
    options.CacheProfiles.Add(nameof(CacheProfileName.Default20),
        new CacheProfile()
        {
            Duration = 20,
            Location = ResponseCacheLocation.Any,
            VaryByQueryKeys = new[] { "*" }
        });
    options.CacheProfiles.Add(nameof(CacheProfileName.Default60),
        new CacheProfile()
        {
            Duration = 60,
            Location = ResponseCacheLocation.Any,
            VaryByQueryKeys = new[] { "*" }
        });
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseResponseCaching();
app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
