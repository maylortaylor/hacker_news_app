import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoParagraphComponent } from './info-paragraph.component';

describe('InfoParagraphComponent', () => {
  let component: InfoParagraphComponent;
  let fixture: ComponentFixture<InfoParagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoParagraphComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoParagraphComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should correctly render first <p> text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p:nth-child(1)').textContent.trim()).toBe('This component demonstrates fetching data from the server, caching on the backend, server-side pagination, and better response models with pagination information.');
  });

  it('should correctly render second <p> text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p:nth-child(2)').textContent.trim()).toBe('The front-end incorporates a table with search using pipes, pagination, and loading animations.');
  });
});
