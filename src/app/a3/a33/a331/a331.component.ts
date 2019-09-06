import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a331',
  templateUrl: './a331.component.html',
  styleUrls: ['./a331.component.css'],
  inputs: ['firstName', 'lastName']
})
export class A331Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private firstName: string = "Default name";

  private _lastName: string = "Default last name";

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

}
