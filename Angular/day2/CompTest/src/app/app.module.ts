import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3.component';
import { Comp4Component } from './comp4.component';
import { Comp5Component } from './comp5.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
