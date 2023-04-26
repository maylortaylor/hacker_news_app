import { TestBed } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HackerNewsApiService } from './api-hacker-news.service';
import { ResponseModel } from '../models/response';
import { PaginationOptions } from '../models/paginationOptions';
import { HttpClient } from '@angular/common/http';


describe('HackerNewsApiService', () => {
  let hackerNewsApiService: HackerNewsApiService;
  let httpTestingController: HttpTestingController;
  let result: ResponseModel;
  const fakeResponse: ResponseModel = {
    data: {},
    succeeded: true,
    errors: [],
    message: "",
    pageNumber: 1,
    pageSize: 10,
    firstPage: "",
    lastPage: "",
    totalPages: 20,
    totalRecords: 100,
    nextPage: "",
    previousPage: ""
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        HackerNewsApiService,
        { provide: 'BASE_URL', useValue: "" }
      ]
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    hackerNewsApiService = TestBed.inject(HackerNewsApiService);
  });

  it('should be created', () => {
    expect(hackerNewsApiService).toBeDefined();
  });

  it('should return data - getStoryItem', () => {
    const paginationOptions = new PaginationOptions();
    hackerNewsApiService.getStoryItem(123).subscribe(res => {
      result = res;
      expect(result).toEqual(fakeResponse);
    });

    const req = httpTestingController.expectOne('api/hackernews/123');
    expect(req.request.method).toBe('GET');

    req.flush(fakeResponse);
  });

  it('should return data - getTopStories', () => {
    const paginationOptions = new PaginationOptions();
    hackerNewsApiService.getTopStories(paginationOptions).subscribe(res => {
      result = res;
      expect(result).toEqual(fakeResponse);
    });

    const req = httpTestingController.expectOne('api/hackernews/topstories?pageNumber=1&pageSize=10');
    expect(req.request.method).toBe('GET');

    req.flush(fakeResponse);
  });

  it('should return data - getNewStories', () => {
    const paginationOptions = new PaginationOptions();
    hackerNewsApiService.getNewStories(paginationOptions).subscribe(res => {
      result = res;
      expect(result).toEqual(fakeResponse);
    });

    const req = httpTestingController.expectOne('api/hackernews/newstories?pageNumber=1&pageSize=10');
    expect(req.request.method).toBe('GET');

    req.flush(fakeResponse);
  });

  it('should return data - getBestStories', () => {
    const paginationOptions = new PaginationOptions();
    hackerNewsApiService.getBestStories(paginationOptions).subscribe(res => {
      result = res;
      expect(result).toEqual(fakeResponse);
    });

    const req = httpTestingController.expectOne('api/hackernews/beststories?pageNumber=1&pageSize=10');
    expect(req.request.method).toBe('GET');

    req.flush(fakeResponse);
  });
});
