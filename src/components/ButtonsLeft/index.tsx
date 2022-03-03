import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { Container, ButtonEditarPokemon, ButtonNewPokemon } from './styles';
import { useAddyHook } from '../../hooks/useSlotPokeball';
import ModalEditOrFree from '../ModalEditOrFree';
import ModalNewPokemon from '../ModalNewPokemon';

interface ButtonProps {
  showModal?: () => void;
}
const SlotButton = ({ showModal }: ButtonProps) => {
  const numberButton = [0, 1, 2, 3, 4, 5];
  const [modalEdit, setModalEdit] = useState(false);
  const [modalNewPokemon, setModalNewPokemon] = useState(false);
  const [indexPokemon, setIndexPokemon] = useState(0);
  const { slotPokeball, limite } = useAddyHook();
  const showModalEditOrFree = () => {
    setModalEdit(!modalEdit);
  };
  const showModalNewPokemon = () => {
    setModalNewPokemon(!modalNewPokemon);
  };

  const selectionPokemon = (id: number) => {
    setIndexPokemon(id);
    showModalEditOrFree();
  };

  return (
    <Container>
      {numberButton.map((item, index) => (
        <ButtonEditarPokemon
          onClick={() =>
            slotPokeball[item]?.sprites?.front_default !== undefined &&
            selectionPokemon(item)
          }
          key={item}
          style={
            slotPokeball[item]?.sprites?.front_default !== undefined
              ? {
                  background: '#F7F9FC',
                  border: '4px solid #00d68f',
                }
              : { background: '#00d68f' }
          }
        >
          {slotPokeball[item]?.sprites?.front_default !== undefined ? (
            <img
              src={slotPokeball[item]?.sprites?.front_default}
              alt={slotPokeball[item]?.name}
            />
          ) : (
            '?'
          )}
        </ButtonEditarPokemon>
      ))}
      <ButtonNewPokemon
        onClick={() => {
          if (!limite) {
            showModalNewPokemon();
          }
        }}
      >
        <AiOutlinePlus />
      </ButtonNewPokemon>
      <ModalEditOrFree
        isOpen={modalEdit}
        setIsOpen={showModalEditOrFree}
        selectPokemon={indexPokemon}
      />
      <ModalNewPokemon
        isOpen={modalNewPokemon}
        setIsOpen={showModalNewPokemon}
      />
    </Container>
  );
};

export default SlotButton;
