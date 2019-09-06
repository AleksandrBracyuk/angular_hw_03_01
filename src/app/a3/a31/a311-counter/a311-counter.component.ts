import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-a311-counter',
  templateUrl: './a311-counter.component.html',
  styleUrls: ['./a311-counter.component.css'],
  inputs: ['name']
})
export class A311CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private name: string = 'test';

  @Input() counterValue: number = 0;

  @Input('step') counterStep: number = 1;

  increment() {
    this.counterValue += this.counterStep;
  }

}
