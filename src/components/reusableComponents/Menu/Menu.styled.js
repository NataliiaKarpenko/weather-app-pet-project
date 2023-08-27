import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.6);

  &.menu-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  &.menu-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.menu-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.menu-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const ContentContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;

  background-color: ${props => props.theme.contentBackground};
`;
