import { useThemeMode } from 'hooks/ThemeContext';
import IconToggleOff from '../NavigationIcons/IconToggleOff';
import IconToggleOn from '../NavigationIcons/IconToggleOn';
import { Button } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();

  return (
    <Button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
      {!isDarkMode && <IconToggleOff />}
      {isDarkMode && <IconToggleOn />}
    </Button>
  );
};

export default ThemeToggler;
