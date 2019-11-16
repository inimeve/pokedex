import {Component, OnInit} from '@angular/core';
import {PokeapiService} from '../../integration/pokeapi/pokeapi.service';
import {PokedexModel} from '../../integration/pokeapi/pokedex/pokedex.model';
import {concatAll, map, mergeMap, tap, toArray} from 'rxjs/operators';
import {PokemonModelHateoas} from '../../integration/pokeapi/pokemon/pokemon.models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(private pokeapiService: PokeapiService, private httpService: HttpClient) { }

  ngOnInit() {
  }

  getPikachu() {
    this.pokeapiService.getPokedexById(1)
      .pipe(
        mergeMap((pokedex: PokedexModel) => {
          return pokedex.pokemon_entries;
        }),
        map((pokemon: PokemonModelHateoas) => {
          return this.httpService.get(pokemon.pokemon_species.url);
        }),
        concatAll(),
        toArray()
      )
      .subscribe(allData => console.log(allData));
  }

}
