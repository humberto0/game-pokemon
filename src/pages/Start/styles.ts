import styled, { keyframes } from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Image = styled.img`
  animation: ${rotation} 1s;
  @media (max-width: 330px) {
    width: 90%;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Animacao = styled.div`
  animation: ${appearFromLeft} 1s;
`;
