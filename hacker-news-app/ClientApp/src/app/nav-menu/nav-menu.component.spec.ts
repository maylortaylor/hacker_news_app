import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HackerNewsStoryItemComponent } from '../hacker-news-story-item/hacker-news-story-item.component';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'hacker-news-story-item', component: HackerNewsStoryItemComponent }
         ])
      ],
      declarations: [
        NavMenuComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should correctly render navbar-brand', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent.trim()).toBe('hacker_news_app');
  });

  it('should go to Home link', () => {
    const compiled = fixture.debugElement.nativeElement;
    let href = compiled.querySelector('.navbar .container .navbar-brand').getAttribute('href');
    expect(href).toEqual('/');
  });

  it('should correctly render Feed link', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-nav .nav-item:nth-child(1) .nav-link strong').textContent.trim()).toBe('Feed');
  });

  it('should go to Feed link', () => {
    const compiled = fixture.debugElement.nativeElement;
    let href = compiled.querySelector('.navbar-nav .nav-item:nth-child(1) .nav-link').getAttribute('href');
    expect(href).toEqual('/hacker-news-stories-feed');
  });

  it('should correctly render Random Story link', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-nav .nav-item:nth-child(2) .nav-link strong').textContent.trim()).toBe('Random Story');
  });

  it('should go to Random Story link', () => {
    const compiled = fixture.debugElement.nativeElement;
    let href = compiled.querySelector('.navbar-nav .nav-item:nth-child(2) .nav-link').getAttribute('href');
    expect(href).toEqual('/hacker-news-story-item');
  });


});
