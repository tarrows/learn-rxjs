import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReaderSwitchComponent } from './component/reader-switch/reader-switch.component';
import { ReaderListComponent } from './component/reader-list/reader-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderSwitchComponent,
    ReaderListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
