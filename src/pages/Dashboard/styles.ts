import styled, { keyframes } from 'styled-components';

import Environment from '../../assets/environment.png';

const translucentEffect = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 1;

  }
`;

export const Background = styled.div`
  animation: ${translucentEffect} 2s;
  height: 100vh;
  background: url(${Environment}) no-repeat center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.625rem;
  position: relative;
  overflow: hidden;
`;
const appearFromLeft = keyframes`

  from {
    opacity: 0.5;
    transform: translateX(-50px);
  }
  to {
    opacity: 0.8;
    transform: translateX(30px);

  }
`;

export const SubImage = styled.div`
  position: absolute;
  padding: 00.625rem;
  height: 80%;
`;

export const PokerBoll = styled.div`
  position: absolute;
  padding: 0.625rem;
  height: 20%;
`;

export const PokemonWater = styled.img`
  animation: ${appearFromLeft} infinite 5s;
  position: absolute;
  left: 0;
  margin-left: 30%;
  bottom: 0;
  margin-bottom: 10%;
  @media (max-width: 77.5rem) {
    margin-left: 25%;
  }
  @media (max-width: 71.625rem) {
    margin-left: 25%;
    margin-bottom: 20%;
  }
  @media (max-width: 53.375rem) {
    margin-left: 25%;
    display: none;
  }
`;
export const PokemonPlant = styled.img`
  position: absolute;
  margin-left: 30%;
  height: 3.125rem;
  @media (max-width: 53.375rem) {
    margin-left: 25%;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 29.9rem) {
    margin-left: 30%;
  }
  @media (max-width: 20rem) {
    margin-left: 35%;
  }
`;
export const PokemonEarth = styled.img`
  position: absolute;
  margin-bottom: 10%;
  right: 0;
  margin-right: 10%;
  height: 3.125rem;
`;
export const PokemonTree = styled.img`
  position: absolute;
  margin-bottom: 30%;
  left: 0;
  margin-left: 20%;
  height: 3.125rem;
  margin-top: 0.625rem;
  @media (max-width: 854px) {
    margin-bottom: 2.5rem;
  }
  @media (max-width: 437px) {
    margin-left: 15%;
  }
`;
export const PokemonElectric = styled.img`
  position: absolute;
  margin-right: 2%;
  margin-bottom: 30px;
  height: 3.125rem;
  @media (max-width: 854px) {
    margin-right: 5%;
  }
  @media (max-width: 571px) {
    margin-right: 8%;
  }
  @media (max-width: 489px) {
    margin-right: 12%;
  }
`;
