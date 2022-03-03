import { useNavigate } from 'react-router-dom';
import { Background, Image, Animacao } from './styles';
import logoPokemon from '../../assets/logoPokemon.svg';
import Button from '../../components/Button';

const Start = () => {
  const history = useNavigate();
  return (
    <Background>
      <Image
        src={logoPokemon}
        alt="GoRestaurant"
        style={{ marginBottom: '40px' }}
      />
      <Animacao>
        <Button onClick={() => history('/pokemon')}>START</Button>
      </Animacao>
    </Background>
  );
};

export default Start;
