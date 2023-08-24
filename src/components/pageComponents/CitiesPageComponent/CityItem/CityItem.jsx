import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useTemperature } from '../../../../hooks/TemperatureContext';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
  requestLocalTime,
  requestWeatherByCity,
} from '../../../../services/API_services';

const CityItem = ({ city }) => {
  const [icon, setIcon] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherConditions, setWeatherConditions] = useState('');
  // const [status, setStatus] = useState('idle');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchCity = searchParams.get('city');
  const [cityName, setCityName] = useState('');
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(city);

        const weatherInfo = await requestWeatherByCity(city);
        const localTime = await requestLocalTime(city);

        setLocalTime(localTime);
        console.log(localTime);
        setCityName(weatherInfo.data.name);
        setTemperature(weatherInfo.data.main.temp);
        setIcon(weatherInfo.data.weather[0].icon);
        setWeatherConditions(weatherInfo.data.weather[0].main);
        console.log(weatherInfo);
      } catch (error) {
        if (city) {
          // searchParams.delete("city");
          // setSearchParams(searchParams);
          // setStatus('rejected');

          if (error.message === 'Request failed with status code 404') {
            toast.error(
              'There is no result matching your query. Check its spelling or enter another city',
              {
                id: 'error1',
              }
            );
          } else {
            toast.error(`API error: ${error.message}`, {
              id: 'error2',
            });
          }
        }
      }
    };

    getData(city);
  }, [city]);
  console.log(localTime);

  // useEffect(() => {
  //   const getLocalTime = async () => {
  //     try {
  //       const localTime = await requestLocalTime(cityName);
  //       setLocalTime(localTime);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getLocalTime(cityName);
  // }, [cityName]);

  return (
    <div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`${weatherConditions}`}
      />
      <div>
        <p style={{ color: 'white' }}>{cityName}</p>
        <p style={{ color: 'white' }}>{localTime}</p>
      </div>
      <p style={{ color: 'white' }}>{temperature}</p>
    </div>
  );
};

export default CityItem;
