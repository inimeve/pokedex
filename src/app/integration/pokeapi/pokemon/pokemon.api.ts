import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {POKEAPI_CONFIG} from '../pokeapi.conf';


@Injectable()
export class PokemonApi {

  private readonly resourcePath: string = '/pokemon';

  constructor(private httpService: HttpClient) { }

  getPokemonById(pokemonId: number): any {
    return this.httpService.get(`${POKEAPI_CONFIG.pokeapi_path_to_proxy}/${pokemonId}`).pipe(
      tap(pokemonData => pokemonData)
    );
  }

}
