import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
//import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import {MessageService} from './message.service';
import {HeroService} from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {InMemoryDataServiceService} from './in-memory-data-service.service';
import { HeroesViewComponent } from './heroes-view/heroes-view.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroesViewComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,HttpClientModule
    //,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, { dataEncapsulation: false })
    //,CommonModule
  ],
  providers: [MessageService,HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
