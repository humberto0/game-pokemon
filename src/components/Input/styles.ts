import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-left: 5px;
  background: #ffffff;
  height: 48px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  padding: 16px;
  max-width: 315px;
  width: 100%;
  color: #c3c3c3;
  margin-right: 20px;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #1d164d;
      border-color: #598bff;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #1d164d;
    `}
  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #323232;
    &::placeholder {
      color: #c3c3c3;
    }
  }
  svg {
    margin-right: 16px;
  }
  @media (max-width: 500px) {
    height: 38px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
