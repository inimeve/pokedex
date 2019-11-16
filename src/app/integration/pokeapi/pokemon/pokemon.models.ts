export class PokemonModel {

  id: number;

  name: string;

}

export class PokemonModelHateoas {

  entryNumber: number;
  // tslint:disable-next-line:variable-name
  pokemon_species: {name: string; url: string};

}
