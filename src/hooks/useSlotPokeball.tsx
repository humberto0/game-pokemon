import React, { createContext, useContext, useState, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { PokemonType } from '../types/pokemonTypes';

interface AuthContextData {
  limite: boolean;
  slotPokeball: PokemonType[];
  freePokemon: (id: number | string) => void;
  addPokeball: (dadosPokemon: PokemonType) => void;
}
export const AddyContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
export const AddyHookProvider = ({ children }: any) => {
  const [cookie, setCookie] = useCookies(['user']);

  const [slotPokeball, setSlotPokeball] = useState<PokemonType[]>([]);
  const [limite, setLimite] = useState(false);

  const addPokeball = (dadosPokemon: PokemonType) => {
    if ([...slotPokeball, dadosPokemon].length === 6) {
      setLimite(!limite);
    }
    if (slotPokeball.length < 7) {
      setSlotPokeball([...slotPokeball, dadosPokemon]);
    }
  };

  const freePokemon = async (id: number | string) => {
    await setSlotPokeball(
      slotPokeball.filter((pokemon, index: number) => pokemon.id !== id),
    );
    setLimite(false);
  };

  return (
    <AddyContext.Provider
      value={{ addPokeball, slotPokeball, limite, freePokemon }}
    >
      {children}
    </AddyContext.Provider>
  );
};
export function useAddyHook(): AuthContextData {
  const context = useContext(AddyContext);
  return context;
}
