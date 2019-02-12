import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateComponent } from './view/create.component';
import { HomeComponent } from './view/home.component';
import { ListComponent } from './view/list.component';

//
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//
export class AppModule {}