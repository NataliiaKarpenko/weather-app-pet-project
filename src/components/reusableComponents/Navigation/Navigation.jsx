import { useThemeMode } from 'hooks/ThemeContext';
import Logo from '../Logo/Logo';
import IconListUl from '../NavigationIcons/IconListUl';
import IconWeatherHailSun from '../NavigationIcons/IconWeatherHailSun';
import { NavigationLink, StyledNavigation } from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = ({ status, handleLinkClick }) => {
  const { isDarkMode } = useThemeMode();
  const location = useLocation();

  console.log(isDarkMode);

  return (
    <div>
      <Logo status="sidebar" />
      <StyledNavigation>
        <NavigationLink to="/weather" status={status} onClick={handleLinkClick}>
          <IconWeatherHailSun />
          <p>Weather</p>
        </NavigationLink>
        <NavigationLink
          state={{ from: location }}
          to="/cities"
          status={status}
          onClick={handleLinkClick}
        >
          <IconListUl />
          <p>Cities</p>
        </NavigationLink>
      </StyledNavigation>
    </div>
  );
};

export default Navigation;
