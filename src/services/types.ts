export interface PokemonPkProps {
  id: number;
  name: string;
  height: string;
  weight: string;
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonstats: {
    base_stat: number;
  }[];
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string;
    };
  }[];
}
export interface PokemonData {
  pokemon_v2_pokemon_by_pk: PokemonPkProps;
}
