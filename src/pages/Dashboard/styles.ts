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
  padding: 10px;
  position: relative;
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
  padding: 10px;
  height: 80%;
`;

export const PokerBoll = styled.div`
  position: absolute;
  padding: 10px;
  height: 20%;
`;

export const PokemonWater = styled.img`
  animation: ${appearFromLeft} infinite 5s;
  position: absolute;
  left: 0;
  margin-left: 30%;
  bottom: 0;
  margin-bottom: 10%;
  @media (max-width: 1240px) {
    margin-left: 25%;
  }
  @media (max-width: 1146px) {
    margin-left: 25%;
    margin-bottom: 20%;
  }
  @media (max-width: 854px) {
    margin-left: 25%;
    display: none;
  }
`;
export const PokemonPlant = styled.img`
  position: absolute;
  margin-left: 30%;
  height: 50px;
  @media (max-width: 854px) {
    margin-left: 25%;
    margin-bottom: 40px;
  }
  @media (max-width: 477px) {
    margin-left: 30%;
    margin-bottom: 40px;
  }
  @media (max-width: 319px) {
    margin-left: 35%;
    margin-bottom: 40px;
  }
`;
export const PokemonEarth = styled.img`
  position: absolute;
  margin-bottom: 10%;
  right: 0;
  margin-right: 10%;
  height: 50px;
`;
export const PokemonTree = styled.img`
  position: absolute;
  margin-bottom: 30%;
  left: 0;
  margin-left: 20%;
  height: 50px;
  margin-top: 10px;
  @media (max-width: 854px) {
    margin-bottom: 40px;
  }
  @media (max-width: 437px) {
    margin-left: 15%;
  }
`;
export const PokemonElectric = styled.img`
  position: absolute;
  margin-right: 2%;
  margin-bottom: 30px;
  height: 50px;
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
