import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokedexModel} from './pokedex.model';
import {tap} from 'rxjs/operators';
import {POKEAPI_CONFIG} from '../pokeapi.conf';

@Injectable()
export class PokedexApi {

  private readonly resourcePath: string = '/v2/pokedex';

  constructor(private httpService: HttpClient) { }

  getPokedexById(pokedexId: number): Observable<PokedexModel> {
    return this.httpService.get(`${POKEAPI_CONFIG.pokeapi_path_to_proxy}${this.resourcePath}/${pokedexId}`)
      .pipe(tap((pokedexData: PokedexModel) => pokedexData));
  }

}
