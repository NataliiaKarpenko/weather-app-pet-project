import styled, { css } from 'styled-components';

export const InputIcon = styled.svg`
  ${props =>
    props.status === 'modal' &&
    css`
      position: absolute;
      top: 10px;
      right: 10px;
    `}

  width: 20px;
  height: 20px;
  fill: ${props => props.theme.title};

  @media ${props => props.theme.media.tab} {
    width: 22px;
    height: 22px;
  }
`;
