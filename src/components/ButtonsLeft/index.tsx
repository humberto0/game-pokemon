import { FC, useCallback, useMemo, useState } from 'react';
import { AiOutlinePlus, AiOutlineClear } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Container, ButtonEditarPokemon, ButtonNewPokemon } from './styles';
import ModalEditOrFree from '../ModalEditOrFree';
import ModalNewPokemon from '../ModalNewPokemon';
import { IButtonsLeftProps } from './types';
import { store } from '../../redux/store';
import { clearPokemon } from '../../redux/slices';

const SlotButton: FC<IButtonsLeftProps> = ({ numberOfButtons }) => {
  const [modalEdit, setModalEdit] = useState(false);

  const [modalNewPokemon, setModalNewPokemon] = useState(false);
  const [idPokemon, setIdPokemon] = useState<number | undefined>();
  const listPokemon = useSelector(
    () => store.getState().pokemonReducer.listPokemon,
  );

  const showModalNewPokemon = useCallback(() => {
    setModalNewPokemon(!modalNewPokemon);
  }, [modalNewPokemon]);

  const showModalEditPokemon = useCallback(
    async (id?: number) => {
      if (id) {
        setIdPokemon(id);
      }
      setModalEdit(!modalEdit);
    },
    [modalEdit],
  );

  const buttonsSlot = useMemo(() => {
    return Array.from({ length: numberOfButtons }, (__, index) => (
      <ButtonEditarPokemon
        onClick={() =>
          listPokemon[index]?.name &&
          showModalEditPokemon(listPokemon[index]?.id)
        }
        key={index}
        className={listPokemon[index]?.name ? 'slotFull' : ''}
      >
        {listPokemon[index]?.name ? (
          <img
            src={listPokemon[index]?.image}
            alt={listPokemon[index]?.name}
            loading="lazy"
          />
        ) : (
          '?'
        )}
      </ButtonEditarPokemon>
    ));
  }, [numberOfButtons, listPokemon, showModalEditPokemon]);

  return (
    <Container>
      {buttonsSlot}
      <ButtonNewPokemon
        onClick={() => {
          if (listPokemon.length < 6) {
            showModalNewPokemon();
          }
        }}
      >
        <AiOutlinePlus />
      </ButtonNewPokemon>
      <ButtonNewPokemon
        className="clearPokemon"
        onClick={() => store.dispatch(clearPokemon())}
      >
        <AiOutlineClear />
      </ButtonNewPokemon>
      {idPokemon && (
        <ModalEditOrFree
          isOpen={modalEdit}
          setIsOpen={showModalEditPokemon}
          selectPokemon={idPokemon}
        />
      )}
      <ModalNewPokemon
        isOpen={modalNewPokemon}
        setIsOpen={showModalNewPokemon}
      />
    </Container>
  );
};

export default SlotButton;
