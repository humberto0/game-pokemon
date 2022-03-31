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
import { v4 as uuidv4 } from 'uuid';
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
import { useAddyHook } from '../../hooks/useSlotPokeball';
import { options } from '../../util/SelectTypes';
import Button from '../Button';
import Input from '../Input';
import getValidationErrors from '../../util/GetValidationErrors';
import AddImage from '../../assets/addImage.svg';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
const animatedComponents = makeAnimated();
interface FormNewPokemon {
  name: string;
  hp: number;
  weight: number;
  height: number;
  select: [string] | [string, string] | [string, string, string];
  habilidade_1: string;
  habilidade_2: string;
  habilidade_3: string;
  habilidade_4: string;
  def: number;
  ath: number;
  def_master: number;
  ath_master: number;
  speed: number;
}
const ModalNewPokemon: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const { addPokeball } = useAddyHook();
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
          const schema = Yup.object().shape({
            name: Yup.string()
              .required('Nome obrigatório')
              .max(50, 'No maximo 50 caracteres'),
            hp: Yup.string()
              .required('HP obrigatória')
              .max(3, 'No maximo 3 caracteres'),
            weight: Yup.string()
              .required('Peso obrigatória')
              .max(3, 'No maximo 3 caracteres'),
            height: Yup.string()
              .required('Altura obrigatória')
              .max(3, 'No maximo 3 caracteres'),
            habilidade_1: Yup.string()
              .required('Habilidade 1 obrigatório')
              .max(35, 'No maximo 35 caracteres'),
            habilidade_2: Yup.string()
              .required('Habilidade 2 obrigatório')
              .max(35, 'No maximo 35 caracteres'),
            habilidade_3: Yup.string()
              .required('Habilidade 3 obrigatório')
              .max(35, 'No maximo 35 caracteres'),
            habilidade_4: Yup.string()
              .required('Habilidade 4 obrigatório')
              .max(35, 'No maximo 35 caracteres'),
            def: Yup.string()
              .required('Defesa obrigatória')
              .max(3, 'No maximo 3 caracteres'),
            ath: Yup.string()
              .required('Defesa obrigatória')
              .max(3, 'No maximo 3 caracteres'),
            def_master: Yup.string()
              .required('Defesa obrigatória')
              .max(3, 'No maximo 3 caracteres'),
            ath_master: Yup.string()
              .required('Defesa obrigatória')
              .max(3, 'No maximo 3 caracteres'),
            speed: Yup.string()
              .required('Defesa obrigatória')
              .max(3, 'No maximo 3 caracteres'),
          });
          await schema.validate(data, {
            abortEarly: false,
          });
          addPokeball({
            id: uuidv4(),
            height: data.height,
            name: data.name,
            weight: data.weight,
            sprites: {
              front_default: newImage,
            },
            stats: [
              {
                base_stat: data.hp,
              },
              {
                base_stat: data.ath,
              },
              {
                base_stat: data.def,
              },
              {
                base_stat: data.ath_master,
              },
              {
                base_stat: data.def_master,
              },
              {
                base_stat: data.speed,
              },
            ],
            abilities: [
              {
                ability: {
                  name: `${data.habilidade_1}, ${
                    data.habilidade_2 !== '' && data.habilidade_2
                  } ,${data.habilidade_3 !== '' && data.habilidade_3} , ${
                    data.habilidade_4 !== '' && data.habilidade_4
                  }`,
                },
              },
            ],
            types: [
              {
                type: {
                  name: selectType.value,
                },
              },
            ],
          });
          setIsOpen();
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [selectType, addPokeball, newImage, setIsOpen],
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
            style={
              newImage === null ? { marginLeft: '1.8rem' } : { marginLeft: 0 }
            }
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
            name="habilidade_1"
            icon={GiWeightLiftingUp}
            placeholder="Habilidade 1"
          />
          <Input
            name="habilidade_2"
            icon={GiWeightLiftingUp}
            placeholder="Habilidade 2"
          />
          <Input
            name="habilidade_3"
            icon={GiWeightLiftingUp}
            placeholder="Habilidade 3"
          />
          <Input
            name="habilidade_4"
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
            name="ath"
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
            name="ath_master"
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
