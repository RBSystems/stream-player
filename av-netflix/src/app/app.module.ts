import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http'

import { StreamCardComponent } from './components/stream-card/stream-card.component';
import { StreamListComponent } from './components/stream-list/stream-list.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [AppComponent, StreamCardComponent, StreamListComponent, PlayerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StreamCardComponent]
})
export class AppModule { }
