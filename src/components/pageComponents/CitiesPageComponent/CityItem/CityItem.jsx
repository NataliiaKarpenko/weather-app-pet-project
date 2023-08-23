// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useTemperature } from '../../../../hooks/TemperatureContext';
// import { useEffect } from 'react';
// import { toast } from 'react-hot-toast';
// import { requestWeatherByCity } from '../../../../services/API_services';

const CityItem = ({ city }) => {
  // const [icon, setIcon] = useState('');
  // const [temperature, setTemperature] = useState('');
  // const [weatherConditions, setWeatherConditions] = useState('');
  // const [status, setStatus] = useState('idle');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchCity = searchParams.get('city');
  // const [cityName, setCityName] = useState('');

  // useEffect(() => {
  //   const getCurrentWeather = async () => {
  //     try {
  //       console.log(city);
  //       const weatherInfo = await requestWeatherByCity(city);
  //       if (weatherInfo.status === 200) {
  //         // setStatus('resolved');
  //         setCityName(weatherInfo.data.name);
  //         setTemperature(weatherInfo.data.main.temp);
  //         setIcon(weatherInfo.data.weather[0].icon);
  //         // setWeatherConditions(weatherInfo.data.weather[0].main);
  //         console.log(weatherInfo);
  //       }
  //     } catch (error) {
  //       if (city) {
  //         // searchParams.delete("city");
  //         // setSearchParams(searchParams);
  //         // setStatus('rejected');

  //         if (error.message === 'Request failed with status code 404') {
  //           toast.error(
  //             'There is no result matching your query. Check its spelling or enter another city',
  //             {
  //               id: 'error1',
  //             }
  //           );
  //         } else {
  //           toast.error(`API error: ${error.message}`, {
  //             id: 'error2',
  //           });
  //         }
  //       }
  //     }
  //   };

  //   getCurrentWeather(city);
  // }, [city]);
  return <div></div>;
};

export default CityItem;
