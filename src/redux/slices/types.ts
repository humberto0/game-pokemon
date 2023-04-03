import { PokemonPkProps } from '../../services/types';

export interface PokemonProps extends PokemonPkProps {
  isPokemonCreated?: boolean;
  image: string;
}

export interface PokemonSliceProps {
  listPokemon: PokemonProps[];
}

export interface IStore {
  pokemonReducer: PokemonSliceProps;
}
