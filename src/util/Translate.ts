export const translate = (id: string) => {
  if (id === 'normal') {
    return 'normal';
  }
  if (id === 'fire') {
    return 'fogo';
  }
  if (id === 'water') {
    return 'água';
  }
  if (id === 'grass') {
    return 'planta';
  }
  if (id === 'fighting ') {
    return 'lutador';
  }
  if (id === 'flying') {
    return 'voador';
  }
  if (id === 'poison') {
    return 'veneno';
  }
  if (id === 'electric') {
    return 'elétrico';
  }
  if (id === 'ground') {
    return 'terra';
  }
  if (id === 'rock') {
    return 'pedra';
  }
  if (id === 'psychic') {
    return 'psíquico';
  }
  if (id === 'ice') {
    return 'gelo';
  }
  if (id === 'bug') {
    return 'inseto';
  }
  if (id === 'ghost') {
    return 'fantasma';
  }
  if (id === 'steel') {
    return 'metálico';
  }
  if (id === 'dragon') {
    return 'dragão';
  }
  if (id === 'dark') {
    return 'sombrio';
  }
  if (id === 'fairy') {
    return 'fada';
  }
  return 'normal';
};

export const backgroundType = (id: string) => {
  if (id === 'normal') {
    return '#C4C0B4';
  }
  if (id === 'fogo') {
    return '#CF2C03';
  }
  if (id === 'água') {
    return '#8FA4FF';
  }
  if (id === 'planta') {
    return '#7361D1';
  }
  if (id === 'lutador ') {
    return '#E08D00';
  }
  if (id === 'voador') {
    return '#8FA4FF';
  }
  if (id === 'veneno') {
    return '#924990';
  }
  if (id === 'elétrico') {
    return '#E08D00';
  }
  if (id === 'terra') {
    return '#C5A455';
  }
  if (id === 'pedra') {
    return '#5E491C';
  }
  if (id === 'psíquico') {
    return '#E25484';
  }
  if (id === 'gelo') {
    return '#B4EDF8';
  }
  if (id === 'inseto') {
    return '#87950C';
  }
  if (id === 'fantasma') {
    return '#6969AF';
  }
  if (id === 'metálico') {
    return '#7F8488';
  }
  if (id === 'dragão') {
    return '#7361D1';
  }
  if (id === 'sombrio') {
    return '#413831';
  }
  if (id === 'fada') {
    return '#E29FE6';
  }
  return '#C4C0B4';
};
