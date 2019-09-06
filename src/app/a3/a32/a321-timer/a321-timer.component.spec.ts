import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A321TimerComponent } from './a321-timer.component';

describe('A321TimerComponent', () => {
  let component: A321TimerComponent;
  let fixture: ComponentFixture<A321TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A321TimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A321TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
