import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JediDashComponent } from './jedi-dash/jedi-dash.component';
import { SithDashComponent } from './sith-dash/sith-dash.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SwUniverseAnalyticsComponent } from './sw-universe-analytics/sw-universe-analytics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    JediDashComponent,
    SithDashComponent,
    MainPageComponent,
    SwUniverseAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
