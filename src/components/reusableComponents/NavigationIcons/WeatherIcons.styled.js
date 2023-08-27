import styled from 'styled-components';

export const Icon = styled.svg`
  width: 40px;
  text-align: center;
  fill: ${props => props.theme.title};
  stroke: ${props => props.theme.title};

  @media ${props => props.theme.media.tab} {
    width: 30px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 40px;
  }
`;

export const ToggleIcon = styled(Icon)`
  width: 60px;
  transition: ${props => props.theme.transition};
  cursor: pointer;

  &:hover {
    scale: 1.02;
  }
`;
