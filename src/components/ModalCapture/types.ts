import { PokemonType } from '../../types/pokemonTypes';

export interface IModalProps {
  dadosPokemon: PokemonType;
  isOpen: boolean;
  setIsOpen: () => void;
  capture: () => void;
}
