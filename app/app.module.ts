import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import './rxjs-extensions';

// Imports for loading & configuring the im-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent}  from './app.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroSearchComponent} from './hero-search.component';

import {HeroService} from './hero.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    HeroSearchComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    AppComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
