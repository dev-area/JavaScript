import { Component, OnInit } from '@angular/core';
import {Mytools,add3Numbers} from './mytools';

@Component({
  selector: 'comp4',
  template: `
    <h2 *ngIf='num1<110'>
      {{num1}} is {{v1}}
    </h2>
    <input type="text" value='{{getVal()}}'><br/>
    <input type="text" [value]='getVal()'><br/>
    <button (click)="click1()" >click me</button>
    <input type="text" [(ngModel)]='num1'>
    <ul class="list-group">
      <li *ngFor='let n of arr' class="list-group-item">Val:{{n}}</li>
    </ul>
  `,
  styles: []
})
export class Comp4Component implements OnInit {
  num1:number=99;
  v1:string="bye";
  arr:number[]=[1,2,3];
  myval:number = 1000;
  getVal():string{
    return "hello 123";
  }
  click1(){
  //  let m:Mytools = new Mytools(200);

 //   this.num1=m.addNumers(100,200);
 //   this.num1=Mytools.addNumersStatic(22,33);
 this.num1++;//=add3Numbers(2,3,4);
  }
  constructor() { }

  ngOnInit() {
  }

}
