import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { BsFillShieldFill, BsSpeedometer2 } from 'react-icons/bs';
import { GiBroadsword } from 'react-icons/gi';
import { GrEdit } from 'react-icons/gr';
import { CgPokemon } from 'react-icons/cg';
import { FormHandles } from '@unform/core';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
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
import { translate } from '../../util/Translate';
import Button from '../Button';
import Input from '../Input';
import getValidationErrors from '../../util/GetValidationErrors';
import { store } from '../../redux/store';
import { freePokemon, updatePokemon } from '../../redux/slices';
import { PokemonProps } from '../../redux/slices/types';

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
  const listPokemon = useSelector(
    () => store.getState().pokemonReducer.listPokemon,
  );
  const [editarNome, setEditarNome] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const estatisticList = [
    { tipo: 'ataque', icon: <GiBroadsword /> },
    { tipo: 'defesa', icon: <BsFillShieldFill /> },
    { tipo: 'ataque-especial', icon: <GiBroadsword /> },
    { tipo: 'defesa-especial', icon: <BsFillShieldFill /> },
    { tipo: 'velocidade', icon: <BsSpeedometer2 /> },
  ];
  const [name, setName] = useState<string>(
    listPokemon.find(item => item.id === selectPokemon)?.name ?? '',
  );
  const [pokemon, setPokemon] = useState<PokemonProps>(
    listPokemon.find(item => item.id === selectPokemon) ?? ({} as PokemonProps),
  );
  const showInput = useCallback(() => {
    setEditarNome(!editarNome);
  }, [editarNome]);

  useEffect(() => {
    setEditarNome(false);
    setPokemon(
      listPokemon.find(item => item.id === selectPokemon) as PokemonProps,
    );
    setName(listPokemon.find(item => item.id === selectPokemon)?.name ?? '');
  }, [selectPokemon, isOpen, listPokemon]);

  const handleSubmit = useCallback(
    async (data: FormEdit) => {
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
        store.dispatch(updatePokemon({ id: selectPokemon, name: data.name }));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [showInput, selectPokemon],
  );

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

      {pokemon && (
        <>
          <AvatarInput>
            <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
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
                    {pokemon.pokemon_v2_pokemonstats[0].base_stat}/
                    {pokemon.pokemon_v2_pokemonstats[0].base_stat}
                  </h3>
                </aside>
                <p />
                <aside>
                  <h2>ALTURA</h2>
                  <h3>{pokemon.height} m</h3>
                </aside>
                <p />
                <aside>
                  <h2>PESO</h2>
                  <h3>{pokemon.weight} KG</h3>
                </aside>
              </div>
              <Type>
                <div />
                <h3>TIPO</h3>
                <div />
              </Type>
              <ContainerType>
                {pokemon.pokemon_v2_pokemontypes?.map(item => (
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
              <h4>
                {pokemon.pokemon_v2_pokemonabilities?.map(
                  item => `${item.pokemon_v2_ability.name}, `,
                )}
              </h4>
              <Type>
                <div />
                <h3>ESTATÍSTICAS</h3>
                <div />
              </Type>
              {pokemon.pokemon_v2_pokemonstats.slice(1).map((item, index) => (
                <Statistic>
                  <h5>
                    {estatisticList[index]?.icon}
                    {estatisticList[index]?.tipo}
                  </h5>
                  <h5>{item.base_stat}</h5>
                </Statistic>
              ))}
            </Content>
          </Container>
        </>
      )}

      <Free>
        <Button
          className="freePokemon"
          onClick={() => {
            store.dispatch(freePokemon(pokemon.id));
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
