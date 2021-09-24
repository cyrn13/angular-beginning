import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-num',
  templateUrl: './rnd-num.component.html',
  styleUrls: ['./rnd-num.component.css']
})
export class RndNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  start = 0;

  increment() {
    this.start += Math.floor(Math.random()*10)
  }

  decrement() {
    this.start -= Math.floor(Math.random()*10)
  }

}
