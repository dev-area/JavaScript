import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Comp2Component } from './comp2.component';
import { Comp3Component } from './comp3.component';
import {MyserService} from './myser.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
