import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CuestionaryModule } from './pregnant/pregnant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CuestionaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
