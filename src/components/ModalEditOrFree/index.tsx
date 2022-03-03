import React, { useState, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import {
  BsFillShieldFill,
  BsClockHistory,
  BsSpeedometer2,
} from 'react-icons/bs';
import { GiBroadsword } from 'react-icons/gi';
import TypePokemon from '../TypePokemon';
import pokeball from '../../assets/pokeball.svg';
import {
  Content,
  Container,
  AvatarInput,
  Type,
  ContainerType,
  Free,
  Statistic,
} from './styles';
import { PokemonType } from '../../types/pokemonTypes';
import { useAddyHook } from '../../hooks/useSlotPokeball';
import { translate } from '../../util/Translate';
import Button from '../Button';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  selectPokemon: number;
}

const ModalEditOrFree: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  selectPokemon,
}) => {
  const { slotPokeball, freePokemon } = useAddyHook();
  const [newObject, setNewObject] = useState<PokemonType>({} as PokemonType);

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
      {slotPokeball !== undefined && slotPokeball.length > 0 && (
        <>
          <AvatarInput>
            <img
              src={slotPokeball[selectPokemon]?.sprites?.front_default}
              alt={slotPokeball[selectPokemon]?.name}
            />
          </AvatarInput>
          <Container>
            <Content>
              <h1>{slotPokeball[selectPokemon]?.name}</h1>
              <div>
                <aside>
                  <h2>HP</h2>
                  <h3>
                    {slotPokeball[selectPokemon]?.stats[0]?.base_stat}/
                    {slotPokeball[selectPokemon]?.stats[0]?.base_stat}
                  </h3>
                </aside>
                <p />
                <aside>
                  <h2>ALTURA</h2>
                  <h3>{slotPokeball[selectPokemon]?.height} m</h3>
                </aside>
                <p />
                <aside>
                  <h2>PESO</h2>
                  <h3>{slotPokeball[selectPokemon]?.weight} KG</h3>
                </aside>
              </div>
              <Type>
                <div />
                <h3>TIPO</h3>
                <div />
              </Type>
              <ContainerType>
                {slotPokeball[selectPokemon]?.types?.map(item => (
                  <TypePokemon
                    key={item.type.name}
                    name={translate(item.type.name)}
                  />
                ))}
              </ContainerType>
              <Type>
                <div />
                <h3>HABILIDADES</h3>
                <div />
              </Type>
              <h4>
                {slotPokeball[selectPokemon]?.abilities?.map(
                  (item: any) => `${item?.ability?.name}, `,
                )}
              </h4>
              <Type>
                <div />
                <h3>ESTATÍSTICAS</h3>
                <div />
              </Type>
              <Statistic>
                <h5>
                  <BsFillShieldFill />
                  Defesa
                </h5>
                <h5>{slotPokeball[selectPokemon]?.stats[2]?.base_stat}</h5>
              </Statistic>
              <Statistic>
                <h5>
                  <GiBroadsword />
                  Ataque
                </h5>
                <h5>{slotPokeball[selectPokemon]?.stats[1]?.base_stat}</h5>
              </Statistic>
              <Statistic>
                <h5>
                  <BsFillShieldFill />
                  defesa especial
                </h5>
                <h5>{slotPokeball[selectPokemon]?.stats[4]?.base_stat}</h5>
              </Statistic>
              <Statistic>
                <h5>
                  <GiBroadsword />
                  ataque especial
                </h5>
                <h5>{slotPokeball[selectPokemon]?.stats[3]?.base_stat}</h5>
              </Statistic>
              <Statistic>
                <h5>
                  <BsSpeedometer2 />
                  velocidade
                </h5>
                <h5>{slotPokeball[selectPokemon]?.stats[5]?.base_stat}</h5>
              </Statistic>
            </Content>
          </Container>
        </>
      )}
      <Free>
        <Button
          style={{ maxWidth: '221px', width: '100%' }}
          onClick={() => {
            freePokemon(slotPokeball[selectPokemon].id);
            setIsOpen();
          }}
        >
          LIBERAR POKEMON
        </Button>
      </Free>
    </Modal>
  );
};

export default ModalEditOrFree;
