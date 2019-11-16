import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokeapiModule} from './pokeapi/pokeapi.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    PokeapiModule.forRoot()
  ]
})
export class IntegrationModule { }
