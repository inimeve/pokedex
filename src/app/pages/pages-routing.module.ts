import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {PokedexComponent} from './pokedex/pokedex.component';

export const PAGES_ROUTES: Routes = [
  {path: 'pokedex', component: PokedexComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
