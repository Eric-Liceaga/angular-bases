import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/heroes.module';
import { ContandorModule } from './contador/ContadorModule';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContandorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
