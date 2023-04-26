import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NumberOfTimesPipe } from '../shared/pipes/numberOfTimes';
import { HackerNewsApiService } from '../shared/services/api-hacker-news.service';
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
});
