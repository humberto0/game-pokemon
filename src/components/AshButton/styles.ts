import styled, { keyframes } from 'styled-components';
import Popover from '@idui/react-popover';

export const Container = styled.div`
  position: absolute;
  margin-left: 5%;
`;

export const Content = styled.button`
  background: transparent;
  max-height: 82px;
  border-radius: 42px;
  height: 82px;
  max-width: 90px;
  width: 80px;
  border: 0;
  padding: 10px;
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
  margin-bottom: 10px;
  background-color: #f7f9fc;
  border-radius: 7px;
  box-sizing: border-box;
  border: 5px solid #db2c66;
  box-shadow: none;
  color: #db2c66;
  &:before {
    // arrow
    border-left-color: #f7f9fc;
    border-bottom-color: #f7f9fc;
    box-shadow: none;
    content: '';
    position: absolute;
    border: 6px solid #ffffff;
    border-right-color: transparent;
    border-top-color: transparent;
    box-shadow: -0.2rem 0.2rem 0.7rem rgb(0 0 0 / 7%);
    top: calc(100% - 7px);
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
        font-size: 30px;
      }
    }
  }
  &.toLoading {
    padding: 5px;
    width: 90px;
    height: 85px;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        animation: ${rotation} infinite 2s;
        font-weight: 700;
        font-size: 40px;
      }
    }
  }
`;

export const Image = styled.img``;

export const ImageGif = styled.img`
  height: 60px;
`;
