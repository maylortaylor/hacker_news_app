import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoParagraphComponent } from '../info-paragraph/info-paragraph.component';
import { NumberOfTimesPipe } from '../shared/pipes/numberOfTimes';
import { HackerNewsApiService } from '../shared/services/api-hacker-news.service';
import { TableLoadingComponent } from '../table-loading/table-loading.component';
import { HackerNewsStoriesFeedComponent } from './hacker-news-stories-feed.component';
import { HackerNewsFeedType } from './models/hacker-news-feed-type.enum';

describe('HackerNewsStoriesFeedComponent', () => {
  let component: HackerNewsStoriesFeedComponent;
  let fixture: ComponentFixture<HackerNewsStoriesFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HackerNewsStoriesFeedComponent,
        InfoParagraphComponent,
        TableLoadingComponent,
        NumberOfTimesPipe
      ],
      providers: [
        HackerNewsApiService,
        { provide: 'BASE_URL', useValue: "" }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsStoriesFeedComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should correctly render the passed @Input value - TOP', () => {
    component.newsFeedType = HackerNewsFeedType.TOP;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#tableLabel').textContent).toBe('Hacker News TOP STORIES Feed');
  });

  it('should correctly render the passed @Input value - BEST', () => {
    component.newsFeedType = HackerNewsFeedType.BEST;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#tableLabel').textContent).toBe('Hacker News BEST STORIES Feed');
  });

  it('should correctly render the passed @Input value - NEW', () => {
    component.newsFeedType = HackerNewsFeedType.NEW;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#tableLabel').textContent).toBe('Hacker News NEW STORIES Feed');
  });
});
