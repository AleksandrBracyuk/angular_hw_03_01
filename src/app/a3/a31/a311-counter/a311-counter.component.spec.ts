import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A311CounterComponent } from './a311-counter.component';

describe('A311CounterComponent', () => {
  let component: A311CounterComponent;
  let fixture: ComponentFixture<A311CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A311CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A311CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
