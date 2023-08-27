import { createContext, useContext, useState } from 'react';
// import { lightTheme, darkTheme } from './themes';

const ThemeModeContext = createContext();

export const useThemeMode = () => {
  return useContext(ThemeModeContext);
};

export const ThemeModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
