import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff3d71;
  max-height: 3.25rem;
  border-radius: 2.625rem;
  height: 3.25rem;
  max-width: 8.125rem;
  width: 7.75rem;
  border: 0;
  padding: 0.625rem;
  color: #fff;
  font-weight: 700;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  &:hover {
    background: ${shade(0.2, '#ff3d71')};
  }
  &.freePokemon {
    max-width: 221px;
    width: 100%;
  }
  svg {
    color: #fff;
  }
  @media (max-width: 61.25rem) {
    padding: 0;
  }
  @media (max-width: 37.5rem) {
    font-size: 1rem;
  }
`;
