import styled from 'styled-components';

interface ContainerProps {
  isType: string;
}

export const Container = styled.article<ContainerProps>`
  background: ${props => props.isType};
  border-radius: 2.625rem;
  height: 2.0625rem;
  max-width: 6.1875rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.3125rem;
  > h5 {
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
