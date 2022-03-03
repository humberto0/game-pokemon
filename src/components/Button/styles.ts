import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff3d71;
  max-height: 52px;
  border-radius: 42px;
  height: 52px;
  max-width: 130px;
  width: 124px;
  border: 0;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  &:hover {
    background: ${shade(0.2, '#ff3d71')};
  }
  svg {
    color: #fff;
  }
  @media (max-width: 980px) {
    padding: 0;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 413px) {
    width: 40%;
  }
`;
