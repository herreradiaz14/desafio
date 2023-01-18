import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ContentPlaceComponent } from './components/content-place/content-place.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LeftMenuComponent,
    ContentPlaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
