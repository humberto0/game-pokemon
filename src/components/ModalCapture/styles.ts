import styled, { keyframes } from 'styled-components';

export const AvatarInput = styled.div`
  position: absolute;
  width: 15.4375rem;
  height: 15.4375rem;
  background: #f7f9fc;
  border-radius: 50%;
  z-index: 10;
  top: 2rem;
  left: 15%;
  border: 0.25rem solid #00d68f;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 23.8125rem) {
    margin-left: 20%;
    width: 12.5rem;
    height: 12.5rem;
  }
  @media (max-width: 22.94rem) {
    margin-left: 18%;
  }
  @media (max-width: 21rem) {
    margin-left: 15%;
  }
  img {
    max-height: 9.3rem;
    max-width: 9.3rem;
    height: 100%;
    width: 100%;
    background: no-repeat center center / cover;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 70%;
  bottom: 0;
  background: #f7f9fc;
  border-radius: 1.5rem 1.5rem 1rem 1rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  height: 32.8rem;
  align-items: center;
  flex-direction: column;
  @media (max-width: 47.5rem) {
    height: 35.8rem;
  }
  @media (max-width: 27.25rem) {
    height: 38rem;
  }
  h1 {
    margin-top: 6.8rem;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: #2e3a59;
    text-transform: uppercase;
  }
  h4 {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;

    text-align: center;
    text-transform: uppercase;
  }
  > div {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 0.3125rem 1fr 0.3125rem 1fr;
    gap: 1rem;
    > p {
      border: 0.0625rem solid #c5cee0;
      width: 0.0625rem;
      height: 3rem;
    }
    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-left: none;

      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1rem;
      }
      > h3 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`;

export const Type = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  > div {
    border: 0.0625rem solid #c5cee0;
    width: 100%;
    height: 0.0625rem;
  }
  > h3 {
    padding: 0.9375rem;
    font-weight: 600;
    font-size: 0.9375rem;
    line-height: 1.5rem;
    text-align: center;
  }
`;
export const ContainerType = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.3125rem;
`;
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Pokeboll = styled.button`
  animation: ${rotation} 1s;
  position: absolute;
  background: transparent;
  border: none;
  bottom: 0;
  right: 0;
  left: 0;
  height: 5rem;
  width: 5rem;
  margin-left: 29%;
  margin-bottom: 1.25rem;
  @media (max-width: 22.94rem) {
    margin-left: 25%;
  }
  @media (max-width: 20.625rem) {
    margin-left: 22%;
  }
`;

export const ButtonRolagem = styled.a`
  display: 'none';
`;
