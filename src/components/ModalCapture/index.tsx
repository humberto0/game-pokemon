import React from 'react';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import TypePokemon from '../TypePokemon';
import pokeball from '../../assets/pokeball.svg';
import {
  Content,
  Container,
  AvatarInput,
  Type,
  ContainerType,
  Pokeboll,
} from './styles';
import { translate } from '../../util/Translate';
import { IModalProps } from './types';

const ModalCapture: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  dadosPokemon,
  capture,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen();
      }}
      overlayClassName="react-modal-overlay"
      className="react-modal-data"
    >
      <button
        type="button"
        onClick={() => {
          setIsOpen();
        }}
        className="react-modal-close"
      >
        <FiX />
      </button>
      <AvatarInput>
        <img
          src={`https://img.pokemondb.net/artwork/${dadosPokemon.name}.jpg`}
          alt={dadosPokemon.name}
          loading="lazy"
        />
      </AvatarInput>
      <Container>
        <Content>
          <h1>{dadosPokemon.name}</h1>
          <div>
            <aside>
              <h2>HP</h2>
              <h3>
                {dadosPokemon.pokemon_v2_pokemonstats[0].base_stat}/
                {dadosPokemon.pokemon_v2_pokemonstats[0].base_stat}
              </h3>
            </aside>
            <p />
            <aside>
              <h2>ALTURA</h2>
              <h3>{dadosPokemon.height} m</h3>
            </aside>
            <p />
            <aside>
              <h2>PESO</h2>
              <h3>{dadosPokemon.weight} KG</h3>
            </aside>
          </div>
          <Type>
            <div />
            <h3>TIPO</h3>
            <div />
          </Type>
          <ContainerType>
            {dadosPokemon.pokemon_v2_pokemontypes.map(item => (
              <TypePokemon
                key={item.pokemon_v2_type.name}
                name={translate(item.pokemon_v2_type.name)}
              />
            ))}
          </ContainerType>
          <Type>
            <div />
            <h3>HABILIDADES</h3>
            <div />
          </Type>
          <h4 id="nomedaancora">
            {dadosPokemon.pokemon_v2_pokemonabilities?.map(
              item => `${item.pokemon_v2_ability.name}, `,
            )}
          </h4>
        </Content>
      </Container>
      <Pokeboll
        onClick={() => {
          capture();
          setIsOpen();
        }}
      >
        <img src={pokeball} alt="pokeboll" />
      </Pokeboll>
    </Modal>
  );
};

export default ModalCapture;
