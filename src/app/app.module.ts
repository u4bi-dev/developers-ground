import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { CoreService } from './providers/core.service';
import { AddressSearchService } from './providers/address-search.service';
import { GithubAvatarService } from './providers/github-avatar.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    CoreService,
    AddressSearchService,
    GithubAvatarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
