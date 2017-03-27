import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  d:Date = new Date();
  title = 'app works!';
  v1:string = 'avi,levi';
}
