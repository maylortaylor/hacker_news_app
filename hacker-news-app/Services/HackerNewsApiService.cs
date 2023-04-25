using hacker_news_app;

public static class HackerNewsApiService 
{
    private static readonly string baseUrl = "https://hacker-news.firebaseio.com/";
    private static readonly string apiVersion = "v0";
    private static readonly string fullApiUrl = $"{baseUrl}{apiVersion}";
    
    public static HackerNewsFeedModel GetHackerNewsStoryItem(int? itemId) 
    {
        var response = BaseAPIService
            .RunAsync<HackerNewsFeedModel>($"{fullApiUrl}/item/{itemId}.json", null)
            .GetAwaiter().GetResult();
        return response;
    }

    public static List<int> GetHackerNewsTopStories() 
    {
        var response = BaseAPIService
            .RunAsync<List<int>>($"{fullApiUrl}/topstories.json", null)
            .GetAwaiter().GetResult();
        return response;
    }

    public static List<int> GetHackerNewsNewStories() 
    {
        var response = BaseAPIService
            .RunAsync<List<int>>($"{fullApiUrl}/newstories.json", null)
            .GetAwaiter().GetResult();
        return response;
    }

    public static List<int> GetHackerNewsBestStories() 
    {
        var response = BaseAPIService
            .RunAsync<List<int>>($"{fullApiUrl}/beststories.json", null)
            .GetAwaiter().GetResult();
        return response;
    }
}