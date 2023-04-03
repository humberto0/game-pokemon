import lottie from 'lottie-web';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLazyQuery } from '@apollo/client';
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
import { PokemonType } from '../../types/pokemonTypes';
import { store } from '../../redux/store';
import { GET_POKEMONS } from '../../services/getPokemons';
import { PokemonData } from '../../services/types';
import SlotButton from '../../components/ButtonsLeft';
import { addPokemon } from '../../redux/slices';

const Dashboard = () => {
  const [modalCaptureOpen, setModalCaptureOpen] = useState(false);
  const [whoPokemon, setWhoPokemon] = useState<PokemonType>();
  const { pokemonReducer } = store.getState();
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

  const handleModalCapture = useCallback(() => {
    setModalCaptureOpen(!modalCaptureOpen);
  }, [modalCaptureOpen]);

  const [getPokemon, { loading }] = useLazyQuery<PokemonData>(GET_POKEMONS);

  const HandleCapture = useCallback(() => {
    if (pokemonReducer?.listPokemon?.length < 6 && whoPokemon) {
      store.dispatch(
        addPokemon({
          ...whoPokemon,
          image: `https://img.pokemondb.net/artwork/${whoPokemon?.name}.jpg`,
        }),
      );
    }
  }, [pokemonReducer?.listPokemon?.length, whoPokemon]);

  const handleSearch = useCallback(() => {
    getPokemon({
      variables: { id: Math.floor(Math.random() * 800) + 1 },
      nextFetchPolicy: 'network-only',
    }).then(res => {
      if (res.data?.pokemon_v2_pokemon_by_pk) {
        setWhoPokemon(res.data?.pokemon_v2_pokemon_by_pk);
        handleModalCapture();
      } else {
        toast.error('Pokemon não encontrado');
      }
    });
  }, [getPokemon, handleModalCapture]);

  return (
    <Background>
      <ToastContainer />
      <SlotButton numberOfButtons={6} />

      <PokemonPlant src={bulba} alt="bulbasauro" />
      <PokemonEarth src={sandshrew} alt="bulbasauro" />
      <PokemonTree src={macacoPokemon} alt="macaco" />
      <PokemonElectric src={pikachu} alt="pikachu" />
      <SubImage className="container" ref={container} />
      <PokemonWater src={squirtle} alt="Water Pokemon" />

      {whoPokemon && (
        <ModalCapture
          isOpen={modalCaptureOpen}
          setIsOpen={handleModalCapture}
          dadosPokemon={whoPokemon}
          capture={HandleCapture}
        />
      )}
      {!modalCaptureOpen && (
        <AshButton loading={loading} search={handleSearch} />
      )}
    </Background>
  );
};

export default Dashboard;
