import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A331Component } from './a331.component';

describe('A331Component', () => {
  let component: A331Component;
  let fixture: ComponentFixture<A331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
