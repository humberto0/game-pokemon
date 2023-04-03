import styled, { keyframes } from 'styled-components';
import { Form } from '@unform/web';
import Select from 'react-select';
import { shade } from 'polished';

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
  label {
    max-height: 9.3rem;
    max-width: 9.3rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
    input {
      display: none;
    }
  }
  img {
    max-height: 9.3rem;
    max-width: 9.3rem;
    height: 100%;
    width: 100%;
    margin-left: 0.8rem;
    &.addImage {
      margin-left: 0;
    }
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
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled(Form)`
  padding: 9.375rem 0.625rem 0.625rem 0.625rem;
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
  margin-left: 0.3125rem;
  margin-top: 0.625rem;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #2e3a59;
  text-transform: uppercase;
  margin-bottom: 0.375rem;
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
  margin-top: 0.625rem;
  > h5 {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    text-transform: uppercase;
    svg {
      margin-right: 0.3125rem;
    }
  }
`;
