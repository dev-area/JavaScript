import { Component, OnInit } from '@angular/core';
import {Instructor} from './instructor';

@Component({
  selector: 'app-comp3',
  template: `
    <h2>{{getNames()}}</h2>
    <br/>
    <input type="text" [(ngModel)]='fil' /><br/>
    <table border='1' width='100%' *ngIf='ins && ins.length > 0'>
        <tbody>
        <tr *ngFor='let ins of ins | inspipe:fil'>
        <td> {{ins.Id}} </td>
        <td> {{ins.Name}} </td>
        <td> {{ins.Price | currency:'ILS':true:'1.2-2'}} </td>
        <td> {{ins.Rate * 186}} </td>
        </tr>
        </tbody>
    </table>
  `,
  styles: []
})
export class Comp3Component  {
  fil:string ;
  getNames():string
  {
    return this.ins.filter(c => c.Price > 100)
                    .map(c => c.Name)
                    .join('*');
  }
 ins: Instructor[] =
        [
            {
          "Id": 100,
          "Name": "avi",
          "Price": 100,
          "Rate": 3
          },
          {
          "Id": 200,
          "Name": "dani",
          "Price": 200,
          "Rate": 5,
          },
          {
          "Id": 300,
          "Name": "rina",
          "Price": 150,
          "Rate": 5,
          },
          {
          "Id": 400,
          "Name": "dina",
          "Price": 250,
          "Rate": 4
          },
          ];



}
