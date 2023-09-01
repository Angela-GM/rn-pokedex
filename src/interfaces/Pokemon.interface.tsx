export interface Pokemon {
    name: string;
    order: number;
    sprites: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    types: {
      slot: number;
      type: {
        name: string;
      };
    };
    weight: number;
    abilities: string[]
  }

