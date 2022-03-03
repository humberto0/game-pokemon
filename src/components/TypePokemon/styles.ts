import styled from 'styled-components';

interface ContainerProps {
  isType: string;
}

export const Container = styled.article<ContainerProps>`
  background: ${props => props.isType};
  border-radius: 42px;
  height: 33px;
  max-width: 99px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  > h5 {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
