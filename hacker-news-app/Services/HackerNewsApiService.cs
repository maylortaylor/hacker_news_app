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
    private static readonly string baseUrl = "https://hacker-news.firebaseio.com/";
    private static readonly string apiVersion = "v0";
    private static readonly string fullApiUrl = $"{baseUrl}{apiVersion}";
    
    public HackerNewsApiService() 
    {

    }

    public HackerNewsFeedModel? GetHackerNewsStoryItem(int? itemId) 
    {
        var response = BaseAPIService
            .RunAsync<HackerNewsFeedModel>($"{fullApiUrl}/item/{itemId}.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;

        return response;
    }

    public List<int>? GetHackerNewsTopStories() 
    {
        var response = BaseAPIService
            .RunAsync<List<int>>($"{fullApiUrl}/topstories.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;
        
        return response;
    }

    public List<int>? GetHackerNewsNewStories() 
    {
        var response = BaseAPIService
            .RunAsync<List<int>>($"{fullApiUrl}/newstories.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;
        
        return response;
    }

    public List<int>? GetHackerNewsBestStories() 
    {
        var response = BaseAPIService
            .RunAsync<List<int>>($"{fullApiUrl}/beststories.json", null)
            .GetAwaiter().GetResult();

        if (response == null) return null;
        
        return response;
    }
}