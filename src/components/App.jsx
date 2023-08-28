import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../Styles/GlobalStyle';
import { theme } from '../Styles/Theme';
import { TemperatureProvider } from '../hooks/TemperatureContext';
import Spinner from './reusableComponents/Spinner/Spinner';
import SharedLayOut from './reusableComponents/SharedLayOut/SharedLayOut';
import Notification from './reusableComponents/Notification/Notification';
import { useThemeMode } from 'hooks/ThemeContext';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const WeatherPage = lazy(() => import('../pages/WeatherPage'));
const HourlyForecastMobPage = lazy(() =>
  import('../pages/HourlyForecastMobPage')
);
const SevenDaysForecastMobPage = lazy(() =>
  import('../pages/SevenDaysForecastMobPage')
);
const CitiesPage = lazy(() => import('../pages/CitiesPage'));

const App = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <GlobalStyle />
      <TemperatureProvider>
        <Notification />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/" element={<SharedLayOut />}>
              <Route path="weather/" element={<WeatherPage />}>
                <Route
                  path="today_forecast"
                  element={<HourlyForecastMobPage />}
                />
                <Route
                  path="7-day_forecast"
                  element={<SevenDaysForecastMobPage />}
                />
              </Route>
              <Route path="cities/" element={<CitiesPage />} />
            </Route>
          </Routes>
        </Suspense>
      </TemperatureProvider>
    </ThemeProvider>
  );
};

export default App;
