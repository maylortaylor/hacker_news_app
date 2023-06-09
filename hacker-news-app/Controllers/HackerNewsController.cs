using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace hacker_news_app.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HackerNewsController : ControllerBase
{
    private readonly IMemoryCache _cacheProvider;
    private readonly IHttpClientFactory _httpService;
    private readonly IUriService _uriService;
    private readonly IHackerNewsApiService _hackerNewsApiService;

    public HackerNewsController(
        IMemoryCache cacheProvider,
        IHttpClientFactory httpService,
        IUriService uriService,
        IHackerNewsApiService hackerNewsApiService
        )
    {
        _cacheProvider = cacheProvider;
        _httpService = httpService;
        _uriService = uriService;
        _hackerNewsApiService = hackerNewsApiService;
    }

    [HttpGet("{itemId:int?}")]
    [ResponseCache(CacheProfileName = nameof(CacheProfileName.Default60))]
    public async Task<Response<HackerNewsFeedModel>?> GetNewsStoryItem(int? itemId)
    {
        if (itemId == null) return null;

        HackerNewsFeedModel? hackerNewsStory = await _hackerNewsApiService.GetHackerNewsStoryItem(itemId);

        if (hackerNewsStory == null) return null;

        return new Response<HackerNewsFeedModel>(hackerNewsStory);
    }

    [HttpGet("topstories")]
    [ResponseCache(CacheProfileName = nameof(CacheProfileName.Default60))]
    public async Task<PagedResponse<List<HackerNewsFeedModel>>?> GetTopStories([FromQuery] PaginationFilter filter)
    {
        PaginationFilter paginationFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
        List<HackerNewsFeedModel> topStories = new List<HackerNewsFeedModel>();
        List<int>? topStoryIds = await _hackerNewsApiService.GetHackerNewsTopStories();

        if (topStoryIds == null) return null;

        int totalRecords = topStoryIds.Count() / 5; // limit number of items to sort
        topStoryIds = topStoryIds.Take(totalRecords).ToList();

        List<int>? pagedData = topStoryIds
            .Skip((paginationFilter.PageNumber - 1) * paginationFilter.PageSize)
            .Take(paginationFilter.PageSize).ToList();

        foreach (int id in pagedData)
        {
            HackerNewsFeedModel? story = await _hackerNewsApiService.GetHackerNewsStoryItem(id);
            if (story != null) {
                topStories.Add(story);
            }
        }

        if (topStories == null) return null;

        PagedResponse<List<HackerNewsFeedModel>>? pagedResponse = PaginationHelper
            .CreatePagedResponse<HackerNewsFeedModel>(topStories, paginationFilter, totalRecords, this._uriService, Request.Path.Value);

        return pagedResponse;
    }
    
    [HttpGet("newstories")]
    [ResponseCache(CacheProfileName = nameof(CacheProfileName.Default20))]
    public async Task<PagedResponse<List<HackerNewsFeedModel>>?> GetNewStories([FromQuery] PaginationFilter filter)
    {
        PaginationFilter paginationFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
        List<HackerNewsFeedModel> topStories = new List<HackerNewsFeedModel>();
        List<int>? topStoryIds = await _hackerNewsApiService.GetHackerNewsNewStories();

        if (topStoryIds == null) return null;
        
        int totalRecords = topStoryIds.Count() / 5; // limit number of items to sort
        topStoryIds = topStoryIds.Take(totalRecords).ToList();

        List<int>? pagedData = topStoryIds
            .Skip((paginationFilter.PageNumber - 1) * paginationFilter.PageSize)
            .Take(paginationFilter.PageSize).ToList();

        foreach (int id in pagedData)
        {
            HackerNewsFeedModel? story = await _hackerNewsApiService.GetHackerNewsStoryItem(id);
            if (story != null) {
                topStories.Add(story);
            }
        }

        if (topStories == null) return null;

        PagedResponse<List<HackerNewsFeedModel>>? pagedResponse = PaginationHelper
            .CreatePagedResponse<HackerNewsFeedModel>(topStories, paginationFilter, totalRecords, this._uriService, Request.Path.Value);

        return pagedResponse;
    }

    [HttpGet("beststories")]
    [ResponseCache(CacheProfileName = nameof(CacheProfileName.Default60))]
    public async Task<PagedResponse<List<HackerNewsFeedModel>>?> GetBestStories([FromQuery] PaginationFilter filter)
    {
        PaginationFilter paginationFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
        List<HackerNewsFeedModel> topStories = new List<HackerNewsFeedModel>();
        List<int>? topStoryIds = await _hackerNewsApiService.GetHackerNewsBestStories();
        
        if (topStoryIds == null) return null;

        int totalRecords = topStoryIds.Count() / 5; // limit number of items to sort
        topStoryIds = topStoryIds.Take(totalRecords).ToList();

        List<int>? pagedData = topStoryIds
            .Skip((paginationFilter.PageNumber - 1) * paginationFilter.PageSize)
            .Take(paginationFilter.PageSize).ToList();

        foreach (int id in pagedData)
        {
            HackerNewsFeedModel? story = await _hackerNewsApiService.GetHackerNewsStoryItem(id);
            if (story != null) {
                topStories.Add(story);
            }
        }

        if (topStories == null) return null;

        PagedResponse<List<HackerNewsFeedModel>>? pagedResponse = PaginationHelper
            .CreatePagedResponse<HackerNewsFeedModel>(topStories, paginationFilter, totalRecords, this._uriService, Request.Path.Value);

        return pagedResponse;
    }
}
