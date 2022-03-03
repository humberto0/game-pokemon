import { BsSearch } from 'react-icons/bs';
import { AiFillWarning } from 'react-icons/ai';
import { BiLoader } from 'react-icons/bi';
import { Container, PopoverSearch, Image, ImageGif, Content } from './styles';
import ash from '../../assets/ash.svg';
import ashWalking from '../../assets/ashWalking.gif';
import { useAddyHook } from '../../hooks/useSlotPokeball';

interface ButtonProps {
  loading: boolean;
  search(): void;
  containerStyle?: object;
}
const AshButton = ({ loading, search, containerStyle = {} }: ButtonProps) => {
  const { limite } = useAddyHook();
  return (
    <Container style={containerStyle}>
      {limite ? (
        <PopoverSearch
          content={loading ? BiLoader : AiFillWarning}
          className={loading ? 'toLoading' : 'toSearch'}
        >
          <Content type="button">
            {loading ? (
              <ImageGif
                src={ashWalking}
                alt="GoRestaurant"
                style={{ marginBottom: '40px' }}
              />
            ) : (
              <Image
                src={ash}
                alt="GoRestaurant"
                style={{ marginBottom: '40px' }}
              />
            )}
          </Content>
        </PopoverSearch>
      ) : (
        <PopoverSearch
          content={loading ? BiLoader : BsSearch}
          className={loading ? 'toLoading' : 'toSearch'}
        >
          <Content type="button" onClick={search}>
            {loading ? (
              <ImageGif
                src={ashWalking}
                alt="GoRestaurant"
                style={{ marginBottom: '40px' }}
              />
            ) : (
              <Image
                src={ash}
                alt="GoRestaurant"
                style={{ marginBottom: '40px' }}
              />
            )}
          </Content>
        </PopoverSearch>
      )}
    </Container>
  );
};

export default AshButton;
