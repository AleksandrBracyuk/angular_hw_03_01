import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a32',
  templateUrl: './a32.component.html',
  styleUrls: ['./a32.component.css']
})
export class A32Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  timerHandler1() { console.log('timerHandler1'); }
  timerHandler2() { console.log('timerHandler2'); }

}
