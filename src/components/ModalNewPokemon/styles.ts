import styled, { keyframes } from 'styled-components';
import { Form } from '@unform/web';
import Select from 'react-select';
import { shade } from 'polished';

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

  label {
    background: transparent;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
  }
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
  margin-top: 153px;
  width: 100%;
  height: 95rem;
  bottom: 0;
  background: #f7f9fc;
  border-radius: 24px 24px 1rem 1rem;
  padding: 5px;
`;

export const Content = styled(Form)`
  padding: 150px 10px 10px 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const SelectTypePokemon = styled(Select)`
  div {
    color: #2e3a59;
  }
`;

export const Titulo = styled.label`
  margin-left: 5px;
  margin-top: 10px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #2e3a59;
  text-transform: uppercase;
  margin-bottom: 6px;
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
  margin-top: 1rem;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
