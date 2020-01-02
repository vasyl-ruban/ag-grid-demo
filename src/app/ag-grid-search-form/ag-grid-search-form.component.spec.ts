import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridSearchFormComponent } from './ag-grid-search-form.component';

describe('AgGridSearchFormComponent', () => {
  let component: AgGridSearchFormComponent;
  let fixture: ComponentFixture<AgGridSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
