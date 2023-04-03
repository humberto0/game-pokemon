import React, {
  useRef,
  useCallback,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import { FiX, FiUser } from 'react-icons/fi';
import {
  GiLifeBar,
  GiBroadsword,
  GiWeightScale,
  GiBodyHeight,
  GiWeightLiftingUp,
} from 'react-icons/gi';
import Modal from 'react-modal';
import { BsFillShieldFill, BsSpeedometer2 } from 'react-icons/bs';
import { FormHandles } from '@unform/core';
import makeAnimated from 'react-select/animated';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import {
  Content,
  Container,
  AvatarInput,
  Type,
  Free,
  Titulo,
  SelectTypePokemon,
} from './styles';
import { options } from '../../util/SelectTypes';
import Button from '../Button';
import Input from '../Input';
import getValidationErrors from '../../util/GetValidationErrors';
import AddImage from '../../assets/addImage.svg';
import { store } from '../../redux/store';
import { addPokemon } from '../../redux/slices';
import { FormNewPokemon, IModalProps } from './types';
import { validationPokemon } from './validations';

const animatedComponents = makeAnimated();

const ModalNewPokemon: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);
  const [selectType, setSelectType] = useState<any>(null);
  const [newImage, setNewImage] = useState<any>(null);
  const handleSubmit = useCallback(
    async (data: FormNewPokemon) => {
      formRef.current?.setErrors({});
      try {
        if (newImage === null) {
          toast.error(
            'Adicione uma imagem para criar um pokemon  ϞϞ(๑⚈ ․̫ ⚈๑)∩',
            {
              position: 'top-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
        } else if (selectType === null) {
          toast.error('Adicione um tipo para o Pokemon  ϞϞ(๑⚈ ․̫ ⚈๑)∩', {
            position: 'top-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          await validationPokemon.validate(data, {
            abortEarly: false,
          });
          setIsOpen();
          store.dispatch(
            addPokemon({
              id: Math.floor(Math.random() * 1000) + 900,
              name: data.name,
              image: newImage,
              height: data.height.toString(),
              weight: data.weight.toString(),
              pokemon_v2_pokemonabilities: [
                {
                  pokemon_v2_ability: {
                    name: data.ability_1,
                  },
                },
                {
                  pokemon_v2_ability: {
                    name: data.ability_2,
                  },
                },
                {
                  pokemon_v2_ability: {
                    name: data.ability_3,
                  },
                },
                {
                  pokemon_v2_ability: {
                    name: data.ability_4,
                  },
                },
              ],
              pokemon_v2_pokemonstats: [
                { base_stat: data.def },
                { base_stat: data.atk },
                { base_stat: data.def_master },
                { base_stat: data.atk_master },
                { base_stat: data.speed },
              ],
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    name: selectType.value,
                  },
                },
              ],
              isPokemonCreated: true,
            }),
          );
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [newImage, selectType, setIsOpen],
  );

  useEffect(() => {
    setNewImage(null);
  }, [isOpen]);

  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error: any) => reject(error);
    });
  }
  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = new FormData();
      getBase64(e.target.files[0]).then((item: any) => setNewImage(item));
      data.append('avatar', e.target.files[0]);
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen();
      }}
      overlayClassName="react-modal-overlay"
      className="react-modal-form"
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
      <ToastContainer />
      <AvatarInput>
        <label htmlFor="avatar">
          <img
            src={newImage === null ? AddImage : newImage}
            className={newImage ? 'addImage' : ''}
            loading="lazy"
            alt="novo pokemon"
          />
          <input type="file" id="avatar" onChange={handleAvatarChange} />
        </label>
      </AvatarInput>
      <Container>
        <Content ref={formRef} onSubmit={handleSubmit}>
          <Titulo>Nome</Titulo>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Titulo>Hp</Titulo>
          <Input name="hp" type="number" icon={GiLifeBar} placeholder="Hp" />
          <Titulo>Peso</Titulo>
          <Input
            name="weight"
            type="number"
            icon={GiWeightScale}
            placeholder="Peso"
          />
          <Titulo>Altura</Titulo>
          <Input
            name="height"
            type="number"
            icon={GiBodyHeight}
            placeholder="Altura"
          />
          <Type>
            <div />
            <h3>TIPO</h3>
            <div />
          </Type>
          <SelectTypePokemon
            components={animatedComponents}
            name="select"
            options={options}
            onChange={setSelectType}
            placeholder="Tipo de Pokemon"
          />
          <Type>
            <div />
            <h3>HABILIDADES</h3>
            <div />
          </Type>
          <Input
            name="ability_1"
            icon={GiWeightLiftingUp}
            placeholder="Habilidade 1"
          />
          <Input
            name="ability_2"
            icon={GiWeightLiftingUp}
            placeholder="Habilidade 2"
          />
          <Input
            name="ability_3"
            icon={GiWeightLiftingUp}
            placeholder="Habilidade 3"
          />
          <Input
            name="ability_4"
            icon={GiWeightLiftingUp}
            placeholder="Habilidade 4"
          />
          <Type>
            <div />
            <h3>ESTATÍSTICAS</h3>
            <div />
          </Type>
          <Titulo>DEFESA</Titulo>
          <Input
            name="def"
            icon={BsFillShieldFill}
            type="number"
            placeholder="00"
          />
          <Titulo>ATAQUE</Titulo>
          <Input
            name="atk"
            icon={GiBroadsword}
            type="number"
            placeholder="00"
          />
          <Titulo>DEFESA ESPECIAL</Titulo>
          <Input
            name="def_master"
            icon={BsFillShieldFill}
            type="number"
            placeholder="00"
          />
          <Titulo>ATAQUE ESPECIAL</Titulo>
          <Input
            name="atk_master"
            icon={GiBroadsword}
            type="number"
            placeholder="00"
          />
          <Titulo>velocidade</Titulo>
          <Input
            name="speed"
            icon={BsSpeedometer2}
            type="number"
            placeholder="00"
          />
          <Free>
            <Button
              type="submit"
              style={{ maxWidth: '221px', width: '100%', marginTop: '20px' }}
            >
              CRIAR POKEMON
            </Button>
          </Free>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalNewPokemon;
