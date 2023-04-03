import { combineReducers } from '@reduxjs/toolkit';

import pokemonReducer from './slices/pokemon.slice';

const combinedReducers = combineReducers({
  pokemonReducer,
});

export default combinedReducers;
