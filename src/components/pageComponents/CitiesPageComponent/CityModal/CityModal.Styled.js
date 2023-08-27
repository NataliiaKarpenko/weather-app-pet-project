import styled, { css } from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 100;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.6);

  &.modal-enter {
    transform: translateY(-100%);
  }

  &.modal-enter-active {
    transform: translateY(0);
    transition: all ${props => props.theme.transition};
  }
  &.modal-exit {
    transform: translateY(0);
  }

  &.modal-exit-active {
    transform: translateY(-100%);
    transition: all ${props => props.theme.transition};
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;

  border-radius: 20px;
  background-color: ${props => props.theme.modalBackground};

  @media ${props => props.theme.media.sx} {
    width: 100%;
    max-width: 350px;
  }

  @media ${props => props.theme.media.phone} {
    width: 350px;
  }

  @media ${props => props.theme.media.tab} {
    padding-left: 30px;
    padding-right: 30px;
    top: 40px;
    width: 550px;
  }
`;

export const Button = styled.button`
  ${props =>
    props.status === 'modal' &&
    css`
      position: absolute;
      top: 10px;
      right: 10px;
    `}
  background-color: transparent;
  border: none;
  outline: none;
  transition: ${props => props.theme.transition};

  &:hover {
    scale: 1.02;
  }
`;
