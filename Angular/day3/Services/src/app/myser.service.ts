import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from './book';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable()
export class MyserService {
  
  constructor(private _http:Http) {
    
   }

   getAllBooks():Observable<Book[]>{
     return this._http
          .get("http://localhost:3000/books/")
          .map(r => <Book[]>r.json());
   }








   factor:number =10;
   setfactor(f:number){
     this.factor = f;
   }
  add(a:number, b:number):number
  {
    return (a+b)*this.factor;
  }
}
