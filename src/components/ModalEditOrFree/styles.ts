import styled, { keyframes } from 'styled-components';
import { Form } from '@unform/web';

export const AvatarInput = styled.div`
  position: absolute;
  width: 247px;
  height: 247px;
  background: #f7f9fc;
  border-radius: 50%;
  z-index: 10;
  margin-top: 32px;
  margin-left: 15%;
  border: 4px solid #00d68f;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 381px) {
    margin-left: 20%;
    width: 200px;
    height: 200px;
  }
  @media (max-width: 367px) {
    margin-left: 18%;
    width: 200px;
    height: 200px;
  }
  @media (max-width: 335px) {
    margin-left: 15%;
    width: 200px;
    height: 200px;
  }
  img {
    height: 150px;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 70%;
  bottom: 0;
  background: #f7f9fc;

  border-radius: 24px 24px 1rem 1rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const InputPk = styled(Form)`
  padding: 100px 10px 10px 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  > button {
    background: #edf1f7;
    border-radius: 4px;
    border: none;
    max-width: 48px;
    max-height: 48px;
    min-height: 45px;
    min-width: 45px;
    width: 100%;
    height: 100%;
    svg {
      color: #2e3a59;
      font-size: 18px;
      font-weight: bold;
    }
    &:hover {
      svg {
        color: #fff;
      }
    }
    & + button {
      margin-left: 5px;
    }
  }
`;

export const Content = styled.div`
  padding: 24px 24px;
  display: flex;
  height: 46.8rem;
  align-items: center;
  flex-direction: column;
  @media (max-width: 760px) {
    height: 50.8rem;
  }
  @media (max-width: 436px) {
    height: 52rem;
  }
  h1 {
    margin-left: 10px;
    margin-top: 109px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #2e3a59;
    text-transform: uppercase;
    > button {
      background: transparent;
      border: none;
      margin-left: 10px;
    }
  }
  > h4 {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    text-align: center;
    text-transform: uppercase;
  }
  > div {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 5px 1fr 5px 1fr;
    gap: 1rem;
    > p {
      border: 1px solid #c5cee0;
      width: 1px;
      height: 48px;
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
        font-size: 12px;
        line-height: 16px;
      }
      > h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
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
    border: 1px solid #c5cee0;
    width: 100%;
    height: 1px;
  }
  > h3 {
    padding: 15px;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
  }
`;
export const ContainerType = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const Free = styled.div`
  position: absolute;
  border: none;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
`;

export const Statistic = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-top: 10px;
  > h5 {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    svg {
      margin-right: 5px;
    }
  }
`;
