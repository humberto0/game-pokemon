export const options: SelectPokemonTypeOption[] = [
  { label: 'Normal', value: 'normal' },
  { label: 'Fogo', value: 'fire' },
  { label: 'Água', value: 'water' },
  { label: 'Planta', value: 'grass' },
  { label: 'Lutador', value: 'fighting' },
  { label: 'Voador', value: 'flying' },
  { label: 'Veneno', value: 'poison' },
  { label: 'Elétrico', value: 'electric' },
  { label: 'Terra', value: 'ground' },
  { label: 'Pedra', value: 'rock' },
  { label: 'Psíquico', value: 'psychic' },
  { label: 'Gelo', value: 'ice' },
  { label: 'Inseto', value: 'bug' },
  { label: 'Fantasma', value: 'ghost' },
  { label: 'Metálico', value: 'steel' },
  { label: 'Dragão', value: 'dragon' },
  { label: 'Sombrio', value: 'dark' },
  { label: 'Fada', value: 'fairy' },
];

export type SelectPokemonTypeOption = {
  label: string;
  value: string;
};
