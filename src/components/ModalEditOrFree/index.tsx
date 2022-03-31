import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiEdit3 } from 'react-icons/fi';
import Modal from 'react-modal';
import { BsFillShieldFill, BsSpeedometer2 } from 'react-icons/bs';
import { GiBroadsword } from 'react-icons/gi';
import { GrEdit } from 'react-icons/gr';
import { CgPokemon } from 'react-icons/cg';
import { FormHandles } from '@unform/core';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import * as Yup from 'yup';
import TypePokemon from '../TypePokemon';
import {
  Content,
  Container,
  AvatarInput,
  Type,
  ContainerType,
  Free,
  Statistic,
  InputPk,
} from './styles';
import { useAddyHook } from '../../hooks/useSlotPokeball';
import { translate } from '../../util/Translate';
import Button from '../Button';
import Input from '../Input';
import getValidationErrors from '../../util/GetValidationErrors';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  selectPokemon: number;
}

interface FormEdit {
  name: string;
}
const ModalEditOrFree: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  selectPokemon,
}) => {
  const { slotPokeball, freePokemon, editName } = useAddyHook();
  const [editarNome, setEditarNome] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const [name, setName] = useState<string>(slotPokeball[selectPokemon]?.name);
  const showInput = () => {
    setEditarNome(!editarNome);
  };

  useEffect(() => {
    setEditarNome(false);
    setName(slotPokeball[selectPokemon]?.name);
  }, [slotPokeball, selectPokemon, isOpen]);

  const handleSubmit = async (data: FormEdit) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório')
          .max(50, 'No maximo 50 caracteres'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      showInput();
      setName(data.name);
      editName(slotPokeball[selectPokemon]?.id, data.name);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  };

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
              {editarNome ? (
                <InputPk ref={formRef} onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    icon={CgPokemon}
                    defaultValue={name}
                    placeholder="Nome"
                    style={{ width: '150px', marginRight: '0' }}
                  />
                  <Button type="submit">
                    <AiOutlineCheck />
                  </Button>
                  <Button type="submit" onClick={showInput}>
                    <AiOutlineClose />
                  </Button>
                </InputPk>
              ) : (
                <h1>
                  {name}
                  <button type="button" onClick={showInput}>
                    <GrEdit />
                  </button>
                </h1>
              )}
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
