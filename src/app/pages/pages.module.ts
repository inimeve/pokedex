import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {SettingsComponent} from './settings/settings.component';
import {CompLibModule} from '../comp-lib/comp-lib.module';
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
    CompLibModule,
    CoreModule
  ]
})
export class PagesModule {
}
