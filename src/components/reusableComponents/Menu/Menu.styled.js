import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: absolute;

  &.menu-enter {
    transform: translateX(0);
  }

  &.menu-enter-active {
    transform: translateX(-100%);

    transition: transform 300ms ease-out;
  }
  &.menu-exit {
    transform: translateX(-100%);
  }

  &.menu-exit-active {
    transform: translateX(0);
    transition: transform 300ms ease-out;
  }

  width: 70%;
  height: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;

  background-color: ${props => props.theme.dark.contentBackground};
`;
