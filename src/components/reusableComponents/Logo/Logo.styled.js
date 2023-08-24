import styled from 'styled-components';

export const Image = styled.img`
  width: 50px;

  @media ${props => props.theme.media.tab} {
    width: 70px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 80px;
  }
`;
