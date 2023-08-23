import styled from 'styled-components';

export const ImageContainer = styled.div`
  &.error-enter {
    opacity: 0;
    scale: 0;
  }
  &.error-enter-active {
    opacity: 1;
    scale: 1;

    transition: ${props => props.theme.transition};
  }
  &.error-exit {
    opacity: 1;
    scale: 1;
  }
  &.error-exit-active {
    opacity: 0;
    scale: 0;
    /* transform: translateY(-100%); */
    transition: ${props => props.theme.transition};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.media.sx} {
    width: 100%;
    height: calc(100vh - 200px);
  }

  @media ${props => props.theme.media.phone} {
    width: 100%;
    height: 501px;
    height: calc(100vh - 200px);
  }

  @media ${props => props.theme.media.tab} {
    width: 550px;
    height: 501px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 650px;
    height: 501px;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;

  @media ${props => props.theme.media.tab} {
    width: 150px;
    height: 150px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 200px;
    height: 200px;
  }
`;

export const ErrorText = styled.p`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.dark.secondaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 22px;
  }
  @media ${props => props.theme.media.desktop} {
    font-size: 24px;
  }
`;
