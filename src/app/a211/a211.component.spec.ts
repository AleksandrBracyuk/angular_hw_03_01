import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A211Component } from './a211.component';

describe('A211Component', () => {
  let component: A211Component;
  let fixture: ComponentFixture<A211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
