import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokeapiService} from './pokeapi.service';
import {PokedexApi} from './pokedex/pokedex.api';
import {PokemonApi} from './pokemon/pokemon.api';

const POKEAPI_SERVICES = [
  {provide: PokedexApi, useClass: PokedexApi},
  {provide: PokemonApi, useClass: PokemonApi},
  {provide: PokeapiService, useClass: PokeapiService},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class PokeapiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PokeapiModule,
      providers: [
        ...POKEAPI_SERVICES
      ]
    } as ModuleWithProviders;
  }
}
