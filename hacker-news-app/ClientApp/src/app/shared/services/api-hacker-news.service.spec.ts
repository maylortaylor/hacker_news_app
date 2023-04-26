import { TestBed } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HackerNewsApiService } from './api-hacker-news.service';
import { ResponseModel } from '../models/response';
import { PaginationOptions } from '../models/paginationOptions';
import { HttpClient } from '@angular/common/http';


describe('HackerNewsApiService', () => {
  // let httpTestingController: HttpTestingController;
  let hackerNewsApiService: HackerNewsApiService;
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
    // httpTestingController = TestBed.inject(HttpTestingController);
    hackerNewsApiService = TestBed.inject(HackerNewsApiService);
  });

  it('should be created', () => {
    expect(hackerNewsApiService).toBeDefined();
  });

  // it('should return data', () => {
  //   let result: ResponseModel;
  //   let paginationOptions = new PaginationOptions();
  //   hackerNewsApiService.getBestStories(paginationOptions).subscribe(res => {
  //     result = res;
  //     expect(result).toEqual(fakeResponse);
  //   });
  //   const req = httpTestingController.expectOne({
  //     method: "GET",
  //     url: baseUrl
  //   });

  //   req.flush([fakeResponse]);
  // });

});
