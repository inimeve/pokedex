import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PokedexApi} from './pokedex/pokedex.api';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private pokeapiUrl: string = '/pokeapi';

  // private pikachuUrl: string = 'https://pokeapi.co/api/v2/pokemon/25';
  private pikachuUrl: string = '/pokeapi/v2/pokemon/25';

  constructor(private httpService: HttpClient, private pokedexApi: PokedexApi) { }


  getPikachu(): Observable<any> {
    return this.httpService.get(`${this.pikachuUrl}`);
  }

  getPokemonById(pokemonId: number) {
    return this.httpService.get(`${this.pokeapiUrl}/${pokemonId}`);
  }

  getPokedexById(pokedexId: number) {
    return this.pokedexApi.getPokedexById(1);
  }

}
