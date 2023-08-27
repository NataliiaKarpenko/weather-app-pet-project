import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Link = styled(NavLink)`
  ${props =>
    props.status === 'sidebar' &&
    css`
      display: block;
      margin-bottom: 80px;
    `}
`;

export const Image = styled.img`
  width: 50px;

  @media ${props => props.theme.media.tab} {
    width: 70px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 80px;
  }
`;
