import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import './rxjs-extensions';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
