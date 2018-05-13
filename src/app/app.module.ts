import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokecomponentComponent } from './jokecomponent/jokecomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    JokecomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
