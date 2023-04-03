import { BsSearch } from 'react-icons/bs';
import { AiFillWarning } from 'react-icons/ai';
import { BiLoader } from 'react-icons/bi';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, PopoverSearch, Image, ImageGif, Content } from './styles';
import ash from '../../assets/ash.svg';
import ashWalking from '../../assets/ashWalking.gif';
import { store } from '../../redux/store';

interface ButtonProps {
  loading: boolean;
  search(): void;
  containerStyle?: object;
}
const AshButton = ({ loading, search, containerStyle = {} }: ButtonProps) => {
  const listPokemon = useSelector(
    () => store.getState().pokemonReducer.listPokemon,
  );

  const AshPokemon = useMemo(() => {
    if (listPokemon.length < 6) {
      return (
        <PopoverSearch
          content={loading ? BiLoader : BsSearch}
          className={loading ? 'toLoading' : 'toSearch'}
        >
          <Content type="button" onClick={search}>
            {loading ? (
              <ImageGif src={ashWalking} alt="Ash" />
            ) : (
              <Image src={ash} alt="Ash" />
            )}
          </Content>
        </PopoverSearch>
      );
    }
    return (
      <PopoverSearch
        content={loading ? BiLoader : AiFillWarning}
        className={loading ? 'toLoading' : 'toSearch'}
      >
        <Content type="button">
          {loading ? (
            <ImageGif src={ashWalking} alt="Ash" />
          ) : (
            <Image src={ash} alt="Ash" />
          )}
        </Content>
      </PopoverSearch>
    );
  }, [listPokemon, loading, search]);

  return <Container style={containerStyle}>{AshPokemon}</Container>;
};

export default AshButton;
