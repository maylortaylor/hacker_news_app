using hacker_news_app;

public interface IHackerNewsApiService 
{
    public Task<HackerNewsFeedModel?> GetHackerNewsStoryItem(int? itemId);
    public Task<List<int>?> GetHackerNewsTopStories();
    public Task<List<int>?> GetHackerNewsNewStories();
    public Task<List<int>?> GetHackerNewsBestStories();
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

    public async Task<HackerNewsFeedModel?> GetHackerNewsStoryItem(int? itemId) 
    {
        var response = await _baseApiService
            .RunAsync<HackerNewsFeedModel>($"{fullApiUrl}/item/{itemId}.json", null);

        if (response == null) return null;

        return response;
    }

    public async Task<List<int>?> GetHackerNewsTopStories() 
    {
        var response = await _baseApiService
            .RunAsync<List<int>>($"{fullApiUrl}/topstories.json", null);

        if (response == null) return null;
        
        return response;
    }

    public async Task<List<int>?> GetHackerNewsNewStories() 
    {
        var response = await _baseApiService
            .RunAsync<List<int>>($"{fullApiUrl}/newstories.json", null);

        if (response == null) return null;
        
        return response;
    }

    public async Task<List<int>?> GetHackerNewsBestStories() 
    {
        var response = await _baseApiService
            .RunAsync<List<int>>($"{fullApiUrl}/beststories.json", null);

        if (response == null) return null;
        
        return response;
    }
}