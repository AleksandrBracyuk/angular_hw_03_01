import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a321-timer',
  templateUrl: './a321-timer.component.html',
  styleUrls: ['./a321-timer.component.css']
})
export class A321TimerComponent implements OnInit {
  private currentValue: number = 0;
  private intervalObject: any = null;

  constructor() { }

  ngOnInit() {
  }

  @Input() timerInterval: number = 1000;

  @Output()
  tick: EventEmitter<number> = new EventEmitter();

  start() {
    console.log('start');
    if (this.intervalObject) return;
    this.intervalObject = setInterval(() => {
      this.currentValue++;
      this.tick.emit(this.currentValue);
    }, this.timerInterval);
  }

  stop() {
    console.log('stop');
    if (!this.intervalObject) return;
    clearInterval(this.intervalObject);
    this.intervalObject = null;
  }
}
