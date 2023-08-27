import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    scale: 1.01;
    transition: ${props => props.theme.transition};
  }
`;
