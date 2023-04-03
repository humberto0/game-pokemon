import styled, { keyframes } from 'styled-components';
import Popover from '@idui/react-popover';

export const Container = styled.div`
  position: absolute;
  margin-left: 5%;
`;

export const Content = styled.button`
  background: transparent;
  max-height: 5.125rem;
  border-radius: 2.625rem;
  height: 5.125rem;
  max-width: 5.625rem;
  width: 5rem;
  border: 0;
  padding: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const PopoverSearch = styled(Popover)`
  margin-bottom: 0.625rem;
  background-color: #f7f9fc;
  border-radius: 0.4375rem;
  box-sizing: border-box;
  border: 0.3125rem solid #db2c66;
  box-shadow: none;
  color: #db2c66;
  &:before {
    // arrow
    border-left-color: #f7f9fc;
    border-bottom-color: #f7f9fc;
    box-shadow: none;
    content: '';
    position: absolute;
    border: 0.375rem solid #ffffff;
    border-right-color: transparent;
    border-top-color: transparent;
    box-shadow: -0.2rem 0.2rem 0.7rem rgb(0 0 0 / 7%);
    top: calc(100% - 0.4375rem);
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(-45deg);
    -ms-transform: translateX(-50%) rotate(-45deg);
    transform: translateX(-50%) rotate(-45deg);
  }
  &.toSearch {
    div {
      width: 100%;
      height: 100%;
      svg {
        font-weight: 700;
        font-size: 1.875rem;
      }
    }
  }
  &.toLoading {
    padding: 0.3125rem;
    width: 5.625rem;
    height: 5.3125rem;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        animation: ${rotation} infinite 2s;
        font-weight: 700;
        font-size: 2.5rem;
      }
    }
  }
`;

export const Image = styled.img`
  margin-bottom: 2.5rem;
`;

export const ImageGif = styled.img`
  height: 3.75rem;
  margin-bottom: 2.5rem;
`;
