import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFiltersComponent } from './grid-filters.component';

describe('GridFiltersComponent', () => {
  let component: GridFiltersComponent;
  let fixture: ComponentFixture<GridFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
