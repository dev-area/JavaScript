import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'comp5',
  template: `
    <p>
      comp5 Works! {{abc}}
    </p>
    <input type="text" [(ngModel)]='abc'/>
    <button (click)="onclick()">Click Comp5</button>
  `,
  styles: []
})
export class Comp5Component {

  @Input() abc:number=20;
  
  @Output() onHighVal: EventEmitter<number> = new EventEmitter<number>();


  onclick(){
    this.abc++;
    if(this.abc > 25)
        {
            this.onHighVal.emit(this.abc);
        }
  }

}
