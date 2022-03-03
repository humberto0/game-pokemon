import React from 'react';
import { backgroundType } from '../../util/Translate';
import { Container } from './styles';

interface TipoProps {
  name: string;
}

const TypePokemon: React.FC<TipoProps> = ({ name }) => {
  return (
    <Container isType={backgroundType(name)}>
      <h5>{name}</h5>
    </Container>
  );
};
export default TypePokemon;
