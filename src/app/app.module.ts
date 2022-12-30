import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';

@NgModule({
  declarations: [
    AppComponent,
    Team1Component,
    Team2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
