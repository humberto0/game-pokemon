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
  height: 3.3125rem;
  width: 3.3125rem;
  z-index: 5;
  background: #00d68f;
  border: 0.25rem  solid #004a45;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.1rem;
  font-weight: bold;
  color: #004a45;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  &.slotFull {
    background: '#F7F9FC',
    border: 0.25rem solid #00d68f,
  }

  &:hover {
    background: ${shade(0.2, '#00d68f')};
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const ButtonNewPokemon = styled.button`
  z-index: 5;
  height: 3.3125rem;
  width: 3.3125rem;
  background: #ff3d71;
  border: 0.25rem solid #db2c66;
  box-sizing: border-box;
  border-radius: 50%;
  &:hover {
    background: ${shade(0.2, '#ff3d71')};
  }

  &.clearPokemon {
    margin-top: 0.75rem;
  }
  svg {
    font-size: 2.1875rem;
    font-weight: bold;
    color: #ffffff;
  }
`;
