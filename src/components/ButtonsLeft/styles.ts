import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 3rem;
  bottom: 1;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ButtonEditarPokemon = styled.button`
  height: 53px;
  width: 53px;
  z-index: 5;
  background: #00d68f;
  border: 4px solid #004a45;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
  color: #004a45;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  &:hover {
    background: ${shade(0.2, '#00d68f')};
  }
  img {
    height: 50px;
  }
`;
export const ButtonNewPokemon = styled.button`
  z-index: 5;
  height: 53px;
  width: 53px;
  background: #ff3d71;
  border: 4px solid #db2c66;
  box-sizing: border-box;
  border-radius: 50%;
  &:hover {
    background: ${shade(0.2, '#ff3d71')};
  }
  svg {
    font-size: 35px;
    font-weight: bold;
    color: #ffffff;
  }
`;
