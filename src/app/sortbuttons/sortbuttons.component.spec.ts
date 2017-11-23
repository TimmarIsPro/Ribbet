import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbuttonsComponent } from './sortbuttons.component';

describe('SortbuttonsComponent', () => {
  let component: SortbuttonsComponent;
  let fixture: ComponentFixture<SortbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
