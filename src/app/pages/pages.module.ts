import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {SettingsComponent} from './settings/settings.component';
import {CoreModule} from '../core/core.module';
import {PokedexComponent} from './pokedex/pokedex.component';


@NgModule({
  declarations: [
    PagesComponent,
    SettingsComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule
  ]
})
export class PagesModule {
}
