import * as Yup from 'yup';

export const validationPokemon = Yup.object().shape({
  name: Yup.string()
    .required('Nome obrigatório')
    .max(50, 'No maximo 50 caracteres'),
  hp: Yup.string().required('HP obrigatória').max(3, 'No maximo 3 caracteres'),
  weight: Yup.string()
    .required('Peso obrigatória')
    .max(3, 'No maximo 3 caracteres'),
  height: Yup.string()
    .required('Altura obrigatória')
    .max(3, 'No maximo 3 caracteres'),
  ability_1: Yup.string()
    .required('Habilidade 1 obrigatório')
    .max(35, 'No maximo 35 caracteres'),
  ability_2: Yup.string()
    .required('Habilidade 2 obrigatório')
    .max(35, 'No maximo 35 caracteres'),
  ability_3: Yup.string()
    .required('Habilidade 3 obrigatório')
    .max(35, 'No maximo 35 caracteres'),
  ability_4: Yup.string()
    .required('Habilidade 4 obrigatório')
    .max(35, 'No maximo 35 caracteres'),
  def: Yup.string()
    .required('Defesa obrigatória')
    .max(3, 'No maximo 3 caracteres'),
  atk: Yup.string()
    .required('Defesa obrigatória')
    .max(3, 'No maximo 3 caracteres'),
  def_master: Yup.string()
    .required('Defesa obrigatória')
    .max(3, 'No maximo 3 caracteres'),
  atk_master: Yup.string()
    .required('Defesa obrigatória')
    .max(3, 'No maximo 3 caracteres'),
  speed: Yup.string()
    .required('Defesa obrigatória')
    .max(3, 'No maximo 3 caracteres'),
});
