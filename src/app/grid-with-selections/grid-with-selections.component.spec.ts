import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWithSelectionsComponent } from './grid-with-selections.component';

describe('GridWithSelectionsComponent', () => {
  let component: GridWithSelectionsComponent;
  let fixture: ComponentFixture<GridWithSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWithSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWithSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
