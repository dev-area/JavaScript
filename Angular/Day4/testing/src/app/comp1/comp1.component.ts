import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  num1:number;
  add(n1:number,n2:number):number
  {
    return n1+n2+this.num1;
  }
  constructor() { }

  ngOnInit() {
  }

}
