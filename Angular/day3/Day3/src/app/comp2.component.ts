import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'comp2',
  template: `
    <p>
      comp2 Works! {{first}} {{last}}
    </p>
   First: <input type="text" [(ngModel)]='First' /><br/>
   Last: <input type="text" [(ngModel)]='Last' /><br/>
  `,
  styles: []
})
export class Comp2Component  {
  first:string;
  last:string;
  
  set First(s:string)
  {
    console.log("First Changed:" + s);
    this.first = s;
    this.MyValChange.emit(this.first + "," + this.last);
  }

  get First():string
  {
    return this.first;
  }
  set Last(s:string)
  {
    this.last = s;
    this.MyValChange.emit(this.first + "," + this.last);
  }

  get Last():string
  {
    return this.last;
  }
  @Output() MyValChange = new EventEmitter();

  @Input()
  set MyVal(val:string)
  {
      this.first =val.split(",")[0];
      this.last = val.split(",")[1];
      this.MyValChange.emit(val);
  }
  get MyVal():string
  {
    return this.first + "," + this.last;
  }

  

}
