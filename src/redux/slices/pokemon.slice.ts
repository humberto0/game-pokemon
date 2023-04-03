import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonSliceProps, PokemonProps } from './types';

const initialState: PokemonSliceProps = {
  listPokemon: [],
};

const pokemonSlice = createSlice({
  name: '@pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonProps>) => {
      if (state.listPokemon.some(pokemon => pokemon.id === action.payload.id))
        return;
      state.listPokemon.push(action.payload);
    },

    freePokemon: (state, action: PayloadAction<PokemonProps['id']>) => {
      state.listPokemon = state.listPokemon.filter(
        pokemon => pokemon.id !== action.payload,
      );
    },

    updatePokemon: (
      state,
      action: PayloadAction<{ id: number; name: string }>,
    ) => {
      state.listPokemon = state.listPokemon.map(pokemon => {
        if (pokemon.id === action.payload.id) {
          return {
            ...pokemon,
            name: action.payload.name,
          };
        }

        return pokemon;
      });
    },
    clearPokemon: state => {
      state.listPokemon = [];
    },
  },
});

export const { addPokemon, updatePokemon, clearPokemon, freePokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
