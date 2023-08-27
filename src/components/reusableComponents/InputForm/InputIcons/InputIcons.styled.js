import styled from 'styled-components';

export const InputIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.title};

  @media ${props => props.theme.media.tab} {
    width: 22px;
    height: 22px;
  }
`;
