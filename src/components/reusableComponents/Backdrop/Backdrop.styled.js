import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  &.menu-enter {
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
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;

  transition: opacity 1000ms ease-out;
`;
