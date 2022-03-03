export type PokemonType = {
  id: number | string;
  height: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
    },
    {
      base_stat: number;
    },
    {
      base_stat: number;
    },
    {
      base_stat: number;
    },
    {
      base_stat: number;
    },
    {
      base_stat: number;
    },
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
};
