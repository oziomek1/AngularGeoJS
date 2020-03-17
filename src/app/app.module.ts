import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ItemViewerComponent } from './viewer/item-viewer/item-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemViewerComponent,
    NavbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
