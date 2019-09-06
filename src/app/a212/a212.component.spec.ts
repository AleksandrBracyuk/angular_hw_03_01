import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A212Component } from './a212.component';

describe('A212Component', () => {
  let component: A212Component;
  let fixture: ComponentFixture<A212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
