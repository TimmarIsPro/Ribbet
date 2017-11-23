import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTimeComponent } from './the-time.component';

describe('TheTimeComponent', () => {
  let component: TheTimeComponent;
  let fixture: ComponentFixture<TheTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
