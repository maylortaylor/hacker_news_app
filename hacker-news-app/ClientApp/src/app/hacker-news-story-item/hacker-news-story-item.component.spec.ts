import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { InfoParagraphComponent } from '../info-paragraph/info-paragraph.component';
import { NumberOfTimesPipe } from '../shared/pipes/numberOfTimes';
import { HackerNewsApiService } from '../shared/services/api-hacker-news.service';
import { TableLoadingComponent } from '../table-loading/table-loading.component';
import { HackerNewsStoryItemComponent } from './hacker-news-story-item.component';

describe('HackerNewsStoryItemComponent', () => {
  let component: HackerNewsStoryItemComponent;
  let fixture: ComponentFixture<HackerNewsStoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HackerNewsStoryItemComponent,
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
    fixture = TestBed.createComponent(HackerNewsStoryItemComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should return random number', () => {
    expect(component['randomNumberBetween'](1, 10)).toBeGreaterThanOrEqual(1);
    expect(component['randomNumberBetween'](1, 10)).toBeLessThanOrEqual(10);
  });
});
