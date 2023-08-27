import { useTemperature } from 'hooks/TemperatureContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { requestSevenDaysForecast } from 'services/API_services';
import {
  ForecastContainer,
  ForecastItem,
  Icon,
  ItemBox,
  Max,
  Min,
  Title,
} from '../../../../reusableComponents/StyleComponents/SeveralDaysForecastComponent.styled';
import { setTemp } from 'utils/setTemp';
import { formatDayToCome } from 'utils/getCurrentTime';

const ThreeDayForecast = ({ cityName }) => {
  const [forecast, setForecast] = useState([]);
  const { isFahrenheit } = useTemperature();

  useEffect(() => {
    const getThreeDaysForecast = async city => {
      try {
        const sevenDaysForecast = await requestSevenDaysForecast(city);
        if (city) {
          setForecast(sevenDaysForecast.daily.slice(0, 3));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getThreeDaysForecast(cityName);
  }, [cityName]);

  return (
    <ForecastContainer status="menu">
      <Title>3-day forecast</Title>
      <ul>
        {forecast.map(item => {
          const unit = isFahrenheit ? 'F' : 'C';

          return (
            <ForecastItem key={item.dt}>
              <ItemBox>{formatDayToCome(item.dt)}</ItemBox>
              <ItemBox>
                <Icon
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png `}
                  alt={item.weather[0].main}
                />
              </ItemBox>
              <ItemBox>{item.weather[0].main}</ItemBox>
              <ItemBox>
                <Max>{setTemp(isFahrenheit, item.temp.max)}</Max>/
                <Min>{setTemp(isFahrenheit, item.temp.min)}</Min>°{unit}
              </ItemBox>
            </ForecastItem>
          );
        })}
      </ul>
    </ForecastContainer>
  );
};

export default ThreeDayForecast;
