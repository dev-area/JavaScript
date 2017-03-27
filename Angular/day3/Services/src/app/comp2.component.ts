import { Component, OnInit } from '@angular/core';
import {MyserService} from './myser.service';
@Component({
  selector: 'app-comp2',
  template: `
    <p>
      comp2 Works!
    </p>
  `,
  styles: [],
  providers: []
})
export class Comp2Component implements OnInit {
  

  constructor(private ser:MyserService) {
      ser.setfactor(100);
   }
  
  ngOnInit() {
  }

}
