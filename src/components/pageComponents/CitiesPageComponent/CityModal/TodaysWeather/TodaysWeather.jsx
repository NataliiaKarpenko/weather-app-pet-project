import { useTemperature } from 'hooks/TemperatureContext';
import { useState, useEffect } from 'react';

import { requestThreeHourForecast } from 'services/API_services';
import { addLeadingZero } from 'utils/getCurrentTime';
import { setTemp } from 'utils/setTemp';
import {
  ForecastItemContainer,
  HourlyForecastContainer,
  HourlyForecastItem,
  HourlyForecastList,
  Image,
  Temp,
  Time,
  Title,
} from './TodaysWeather.styled';

const TodaysWeather = ({ cityName, localTime }) => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const { isFahrenheit } = useTemperature();
  const { localHours } = localTime;

  const currentHours = new Date().getHours();
  const deltaHours = Number(currentHours) - Number(localHours);

  const unit = isFahrenheit ? 'F' : 'C';
  const newHourlyForecast = hourlyForecast.slice(0, 3);

  useEffect(() => {
    const getHourlyForecast = async city => {
      try {
        const { data } = await requestThreeHourForecast(city);
        setHourlyForecast(data.list);
      } catch (e) {
        console.log(e);
      }
    };
    getHourlyForecast(cityName);
  }, [cityName]);

  const getLocalHours = value => {
    let localHoursToCome;

    if (deltaHours < 0) {
      localHoursToCome =
        value - deltaHours >= 24 ? value - deltaHours - 24 : value - deltaHours;
    } else {
      localHoursToCome =
        24 + value - deltaHours < 24
          ? 24 + value - deltaHours
          : value - deltaHours;
    }

    return addLeadingZero(localHoursToCome).toString();
  };

  return (
    <HourlyForecastContainer>
      <Title>Today's weather</Title>
      <HourlyForecastList>
        {newHourlyForecast.map(({ dt_txt, main, dt, weather }) => {
          const date = new Date(dt_txt);
          const hours = Number(date.getHours());
          const localHoursToCome = getLocalHours(hours);
          const minutes = addLeadingZero(date.getMinutes());

          return (
            <HourlyForecastItem key={dt}>
              <ForecastItemContainer>
                <Time>
                  {localHoursToCome}:{minutes}
                </Time>
                <Image
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png `}
                  alt={weather[0].main}
                />

                <Temp>
                  {setTemp(isFahrenheit, main.temp)}° {unit}
                </Temp>
              </ForecastItemContainer>
            </HourlyForecastItem>
          );
        })}
      </HourlyForecastList>
    </HourlyForecastContainer>
  );
};

export default TodaysWeather;
