import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NumberOfTimesPipe } from '../shared/pipes/numberOfTimes';
import { TableLoadingComponent } from './table-loading.component';

describe('TableLoadingComponent', () => {
  let component: TableLoadingComponent;
  let fixture: ComponentFixture<TableLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableLoadingComponent,
        NumberOfTimesPipe
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLoadingComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should correctly render 6 <th>', () => {
    const query = fixture.debugElement.queryAll(By.css('th'));
    expect(query.length).toBe(6);
  });

  it('should correctly render 18 <td>', () => {
    const query = fixture.debugElement.queryAll(By.css('td'));
    expect(query.length).toBe(18);
  });
});
