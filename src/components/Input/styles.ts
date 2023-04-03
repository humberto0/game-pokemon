import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-left: 0.3125rem;
  background: #ffffff;
  height: 3rem;
  border-radius: 0.3125rem;
  border: 0.125rem solid #ffffff;
  padding: 1rem;
  max-width: 19.68rem;
  width: 100%;
  color: #c3c3c3;
  margin-right: 1.25rem;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 0.5rem;
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
    margin-right: 1rem;
  }
  @media (max-width: 31.25rem) {
    height: 2.375rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 1.25rem;
  margin-left: 1rem;
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
