import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {CoreModule} from './core/core.module';
import {IntegrationModule} from './integration/integration.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CoreModule.forRoot(),
    IntegrationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
