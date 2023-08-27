import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: ${props => (props.status === 'sidebar' ? 'absolute' : '')};
  top: ${props => (props.status === 'sidebar' ? '10px' : '')};
  left: ${props => (props.status === 'sidebar' ? '50%' : '')};
  transform: ${props => (props.status === 'sidebar' ? 'translateX(-50%)' : '')};
`;

export const StyledMenuIcon = styled.svg`
  height: 30px;
  width: 50px;

  fill: ${props => props.theme.title};
`;
