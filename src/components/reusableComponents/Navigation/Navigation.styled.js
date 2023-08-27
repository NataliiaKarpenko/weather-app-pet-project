import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  flex-direction: ${props => (props.status === 'menu' ? 'row' : 'column')};
  align-items: center;
  gap: 20px;
  font-size: 25px;

  color: ${props => props.theme.title};
  transition: ${props => props.theme.transition};

  @media ${props => props.theme.media.tab} {
    gap: 10px;
    font-size: 18px;
  }
  @media ${props => props.theme.media.desktop} {
    font-size: 20px;
  }

  &.active {
    font-weight: 500;
    color: ${props => props.theme.activeLink};
    fill: ${props => props.theme.activeLink};
  }

  &.active svg {
    fill: ${props => props.theme.activeLink};
    stroke: ${props => props.theme.activeLink};
  }

  &:hover {
    scale: 1.02;
  }
`;
