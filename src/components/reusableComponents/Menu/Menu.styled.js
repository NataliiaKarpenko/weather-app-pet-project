import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: absolute;
  transition: transform 1000ms ease-out;
  top: 0;
  bottom: 100%;

  /* &.menu-enter {
    transform: translateX(-100%);
  }

  &.menu-enter-active {
    transform: translateX(0);
    transition: transform 1000ms ease-out;
  }
  &.menu-exit {
    transform: translateX(0);
  }

  &.menu-exit-active {
    transform: translateX(-100%);
    transition: transform 1000ms ease-out;
  } */

  width: 300px;
  height: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;

  background-color: ${props => props.theme.dark.contentBackground};
`;
