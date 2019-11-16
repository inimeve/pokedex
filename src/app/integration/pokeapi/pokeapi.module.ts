import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokeapiService} from './pokeapi.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PokeapiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PokeapiModule,
      providers: [
        PokeapiService
      ]
    } as ModuleWithProviders;
  }
}
