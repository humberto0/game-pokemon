export const translate = (id: string) => {
  switch (id) {
    case 'fire':
      return 'fogo';
    case 'water':
      return 'água';
    case 'grass':
      return 'planta';
    case 'fighting':
      return 'lutador';
    case 'flying':
      return 'voador';
    case 'poison':
      return 'veneno';
    case 'electric':
      return 'elétrico';
    case 'ground':
      return 'terra';
    case 'rock':
      return 'pedra';
    case 'psychic':
      return 'psíquico';
    case 'ice':
      return 'gelo';
    case 'bug':
      return 'inseto';
    case 'ghost':
      return 'fantasma';
    case 'steel':
      return 'metálico';
    case 'dragon':
      return 'dragão';
    case 'dark':
      return 'sombrio';
    case 'fairy':
      return 'fada';
    default:
      return 'normal';
  }
};

export const backgroundType = (id: string) => {
  switch (id) {
    case 'normal':
      return '#C4C0B4';
    case 'fogo':
      return '#CF2C03';
    case 'água':
      return '#8FA4FF';
    case 'planta':
      return '#7361D1';
    case 'lutador':
      return '#E08D00';
    case 'voador':
      return '#8FA4FF';
    case 'veneno':
      return '#924990';
    case 'elétrico':
      return '#E08D00';
    case 'terra':
      return '#C5A455';
    case 'pedra':
      return '#5E491C';
    case 'psíquico':
      return '#E25484';
    case 'gelo':
      return '#B4EDF8';
    case 'inseto':
      return '#87950C';
    case 'fantasma':
      return '#6969AF';
    case 'metálico':
      return '#7F8488';
    case 'dragão':
      return '#7361D1';
    case 'sombrio':
      return '#413831';
    case 'fada':
      return '#E29FE6';
    default:
      return '#C4C0B4';
  }
};
