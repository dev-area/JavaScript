import { Component, OnInit } from '@angular/core';
import {MyserService} from './myser.service';
import {Observable} from 'rxjs';
import {Book} from './book';

@Component({
  selector: 'app-comp3',
  template: `
    <p>
      comp3 Works!
    </p>
    <button (click)="onc()">click</button>
    <table border='1' width='100%' *ngIf='books && books.length > 0'>
      <tbody>
      <tr *ngFor='let b of books'>
      <td> {{b.id}} </td>
      <td> {{b.Name }} </td>
      <td> {{b.Price }} </td>
      <td> {{b.rate }} </td>
      </tr>
      </tbody>
      </table>
  `,
  styles: [],
  providers: []
})
export class Comp3Component implements OnInit {

  books:Book[];

  constructor(private ser:MyserService) {
   // console.log(ser.add(10,20));
   }
    ngOnInit() {
      this.ser.getAllBooks()
              .subscribe(b => this.books = b);
  }
  onc()
  {
    let x=Observable.interval(1000)
                    .take(10)
                    .filter(i => i % 2 == 0)
                    .do(d => console.log("obs1111"))
                    ;

    x.subscribe(i => console.log("hello:" + i));
    x.subscribe(i => console.log("bye:" + i));
  }
  
  

 

}
