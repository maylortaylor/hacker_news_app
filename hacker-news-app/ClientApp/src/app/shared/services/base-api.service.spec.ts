import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed  } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import { BaseApiService } from './base-api.service';

describe('BaseApiService', () => {
  let baseApiService: BaseApiService;
  let httpMock: HttpTestingController;
  let testObject: any = {
    "by" : "dhouston",
    "descendants" : 71,
    "id" : 8863,
    "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
    "score" : 111,
    "time" : 1175714200,
    "title" : "My YC app: Dropbox - Throw away your USB drive",
    "type" : "story",
    "url" : "http://www.getdropbox.com/u/2/screencast.html"
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        BaseApiService,
        { provide: 'BASE_URL', useValue: "" }
      ]
    }).compileComponents();

    baseApiService = TestBed.inject(BaseApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(baseApiService).toBeDefined();
  });

  it('should return json', () => {
    baseApiService.get('https://hacker-news.firebaseio.com/v0/item/8863.json').subscribe((data: any) => {
      expect(data.id).toBe(8863);
      expect(data.by).toBe('dhouston');
      expect(data).toEqual(testObject);
    });

    const req = httpMock.expectOne('https://hacker-news.firebaseio.com/v0/item/8863.json');
    expect(req.request.method).toBe('GET');

    req.flush(testObject);
  });
});
