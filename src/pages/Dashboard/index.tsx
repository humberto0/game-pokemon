import lottie from 'lottie-web';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import {
  Background,
  SubImage,
  PokemonWater,
  PokemonPlant,
  PokemonEarth,
  PokemonTree,
  PokemonElectric,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';
import AshButton from '../../components/AshButton';
import squirtle from '../../assets/squirtlePokemon.png';
import bulba from '../../assets/bulbasauro.gif';
import sandshrew from '../../assets/sandshrew.gif';
import macacoPokemon from '../../assets/macacoPokemon.gif';
import pikachu from '../../assets/pikachu.gif';
import ModalCapture from '../../components/ModalCapture';
import { useAddyHook } from '../../hooks/useSlotPokeball';
import { PokemonType } from '../../types/pokemonTypes';
import SlotButton from '../../components/ButtonsLeft';

const Dashboard = () => {
  const { addPokeball, limite } = useAddyHook();
  const [loading, setLoading] = useState(false);
  const [modalCaptureOpen, setModalCaptureOpen] = useState(false);
  const [whoPokemon, setWhoPokemon] = useState<PokemonType>({
    id: 0,
    height: 0,
    name: 'null',
    weight: 0,
    sprites: {
      front_default: 'null',
    },
    stats: [
      {
        base_stat: 0,
      },
      {
        base_stat: 1,
      },
      {
        base_stat: 2,
      },
      {
        base_stat: 3,
      },
      {
        base_stat: 4,
      },
      {
        base_stat: 5,
      },
    ],
    abilities: [
      {
        ability: {
          name: 'null',
        },
      },
    ],
    types: [
      {
        type: {
          name: 'null',
        },
      },
    ],
  });

  const container: any = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/birdsAnimation.json'),
    });
  }, []);

  const showModalCapture = () => {
    setModalCaptureOpen(!modalCaptureOpen);
  };
  const addPokemon = () => {
    addPokeball(whoPokemon);
    showModalCapture();
  };

  const searchPokemon = async () => {
    setLoading(true);
    const pokemonRandom = Math.floor(Math.random() * 807) + 1;
    try {
      const response: AxiosResponse = await api.get(`/${pokemonRandom}`);
      setLoading(false);
      setWhoPokemon(response.data);
      showModalCapture();
    } catch (err) {
      setLoading(false);
      toast.error(
        'Ocorreu um erro ao capturar um pokemon, tente novamente mais tarde  ϞϞ(๑⚈ ․̫ ⚈๑)∩',
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
    }
  };

  return (
    <Background>
      <ToastContainer />
      <SlotButton />

      <PokemonPlant src={bulba} alt="bulbasauro" />
      <PokemonEarth src={sandshrew} alt="bulbasauro" />
      <PokemonTree src={macacoPokemon} alt="macaco" />
      <PokemonElectric src={pikachu} alt="pikachu" />
      <SubImage className="container" ref={container} />
      <PokemonWater src={squirtle} alt="Water Pokemon" />

      <ModalCapture
        capture={addPokemon}
        isOpen={modalCaptureOpen}
        setIsOpen={showModalCapture}
        dadosPokemon={whoPokemon}
      />
      {!modalCaptureOpen && (
        <AshButton loading={loading} search={searchPokemon} />
      )}
    </Background>
  );
};

export default Dashboard;
