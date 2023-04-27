using hacker_news_app;

public interface IHackerNewsApiService 
{
    public HackerNewsFeedModel? GetHackerNewsStoryItem(int? itemId);
    public List<int>? GetHackerNewsTopStories();
    public List<int>? GetHackerNewsNewStories();
    public List<int>? GetHackerNewsBestStories();
}

public class HackerNewsApiService : IHackerNewsApiService
{
    private readonly IBaseAPIService _baseApiService;
    private static readonly string baseUrl = "https://hacker-news.firebaseio.com/";
    private static readonly string apiVersion = "v0";
    private static readonly string fullApiUrl = $"{baseUrl}{apiVersion}";
    
    public HackerNewsApiService(IBaseAPIService baseAPIService) 
    {
        _baseApiService = baseAPIService;
    }

    public HackerNewsFeedModel? GetHackerNewsStoryItem(int? itemId) 
    {
        var response = _baseApiService
            .RunAsync<HackerNewsFeedModel>($"{fullApiUrl}/item/{itemId}.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;

        return response;
    }

    public List<int>? GetHackerNewsTopStories() 
    {
        var response = _baseApiService
            .RunAsync<List<int>>($"{fullApiUrl}/topstories.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;
        
        return response;
    }

    public List<int>? GetHackerNewsNewStories() 
    {
        var response = _baseApiService
            .RunAsync<List<int>>($"{fullApiUrl}/newstories.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;
        
        return response;
    }

    public List<int>? GetHackerNewsBestStories() 
    {
        var response = _baseApiService
            .RunAsync<List<int>>($"{fullApiUrl}/beststories.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;
        
        return response;
    }
}