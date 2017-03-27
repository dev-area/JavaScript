import { Component } from '@angular/core';
import {Question,OP} from './Question';
@Component({
  selector: 'myapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qarr:Array<Question> = new Array<Question>(10);
  title = 'hello!!!';
  num:number = 100;
  flag:number = 0;
  username:string = "avi";
  myvar:string = "alert-info";
  onCompClick(n:number){
    this.num = n;
  }
  constructor()
  {
    for(let i=0;i<this.qarr.length;i++)
    {
      this.qarr[i]=new Question();
      this.qarr[i].num1 = 100*(i+1);
      this.qarr[i].num2 = 200*(i+1);
      this.qarr[i].genOP();
    }
  }

  onClick(){
    this.num++;
    this.flag++;
    if(this.flag % 2 == 0)
        this.myvar = "alert-info";
    else
        this.myvar = "alert-danger";
  }
}
