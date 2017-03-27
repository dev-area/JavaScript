import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Comp2Component } from './comp2.component';
import { MypipePipe } from './mypipe.pipe';
import { Comp3Component } from './comp3.component';
import { InspipePipe } from './inspipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,
    MypipePipe,
    Comp3Component,
    InspipePipe
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
