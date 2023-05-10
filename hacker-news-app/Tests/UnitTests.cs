using hacker_news_app;
using hacker_news_app.Controllers;
using Microsoft.Extensions.Caching.Memory;
using Moq;
namespace Tests;

public class UnitTests
{
    [Fact]
    public void UriService_Test()
    {
        var route = "http://baseurl.test";
        var serviceMock = new Mock<IUriService>();
        var paginationFilter = new PaginationFilter();
        var returnValue = new Uri($"{route}?pageNumber=1&pageSize=10");
        serviceMock.Setup(r => r.GetPageUri(paginationFilter, "")).Returns(returnValue);
        var service = new UriService(route);

        var result = service.GetPageUri(paginationFilter, "");
        service.GetPageUri(paginationFilter, "");
        Assert.NotNull(result);
        Assert.Equal(returnValue, result);
    }

    [Fact]
    public async Task GetNewsStoryItem_Test()
    {
        var cacheMock = new Mock<IMemoryCache>();
        var httpClientMock = new Mock<IHttpClientFactory>();
        var uriMock = new Mock<IUriService>();
        var apiMock = new Mock<IHackerNewsApiService>();
        var returnValue = new HackerNewsFeedModel(8863);
        apiMock.Setup(async r => await r.GetHackerNewsStoryItem(8863)).Returns(returnValue);
        var controller = new HackerNewsController(
            cacheMock.Object,
            httpClientMock.Object,
            uriMock.Object,
            apiMock.Object
        );

        var result = controller.GetNewsStoryItem(8863);
        apiMock.VerifyAll();
    }

    [Fact]
    public async Task GetHackerNewsTopStories_Test()
    {
        var cacheMock = new Mock<IMemoryCache>();
        var httpClientMock = new Mock<IHttpClientFactory>();
        var uriMock = new Mock<IUriService>();
        var apiMock = new Mock<IHackerNewsApiService>();
        var paginationFilter = new PaginationFilter();
        var returnValue = new List<int>();
        apiMock.Setup(async r => await r.GetHackerNewsTopStories()).Returns(returnValue);
        var controller = new HackerNewsController(
            cacheMock.Object,
            httpClientMock.Object,
            uriMock.Object,
            apiMock.Object
        );

        var result = controller.GetTopStories(paginationFilter);
        apiMock.Verify();
    }

    [Fact]
    public async Task GetHackerNewsNewStories_Test()
    {
        var cacheMock = new Mock<IMemoryCache>();
        var httpClientMock = new Mock<IHttpClientFactory>();
        var uriMock = new Mock<IUriService>();
        var apiMock = new Mock<IHackerNewsApiService>();
        var paginationFilter = new PaginationFilter();
        var returnValue = new List<int>();
        apiMock.Setup(async r => await r.GetHackerNewsNewStories()).Returns(returnValue);
        var controller = new HackerNewsController(
            cacheMock.Object,
            httpClientMock.Object,
            uriMock.Object,
            apiMock.Object
        );

        var result = controller.GetNewStories(paginationFilter);
        apiMock.Verify();
    }

    [Fact]
    public async Task GetHackerNewsBestStories_Test()
    {
        var cacheMock = new Mock<IMemoryCache>();
        var httpClientMock = new Mock<IHttpClientFactory>();
        var uriMock = new Mock<IUriService>();
        var apiMock = new Mock<IHackerNewsApiService>();
        var paginationFilter = new PaginationFilter();
        var returnValue = new List<int>();
        apiMock.Setup(async r => await r.GetHackerNewsBestStories()).Returns(returnValue);
        var controller = new HackerNewsController(
            cacheMock.Object,
            httpClientMock.Object,
            uriMock.Object,
            apiMock.Object
        );

        var result = controller.GetBestStories(paginationFilter);
        apiMock.Verify();
    }

}