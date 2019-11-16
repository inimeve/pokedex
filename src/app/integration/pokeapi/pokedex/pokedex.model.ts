import {PokemonModelHateoas} from '../pokemon/pokemon.models';

export class PokedexModel {

  id: number;

  name: string;

  // tslint:disable-next-line:variable-name
  pokemon_entries: PokemonModelHateoas[];

}

export class PokedexModelHateoas {

  name: string;
  url: string;

}
