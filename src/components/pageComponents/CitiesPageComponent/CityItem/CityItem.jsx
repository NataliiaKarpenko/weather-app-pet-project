import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { requestWeatherByCity } from '../../../../services/API_services';
import { Image, WeatherContainer, City, Temp } from './CityItem.styled';
import { setTemp } from 'utils/setTemp';
import { useTemperature } from 'hooks/TemperatureContext';
import CityModal from '../CityModal/CityModal';

const CityItem = ({ city, searchCity }) => {
  const { isFahrenheit } = useTemperature();
  const unit = isFahrenheit ? 'F' : 'C';

  const [cityName, setCityName] = useState('');
  const [icon, setIcon] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherConditions, setWeatherConditions] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getWeatherByCity = async () => {
      try {
        const weatherInfo = await requestWeatherByCity(city);
        setCityName(weatherInfo.data.name);
        setTemperature(weatherInfo.data.main.temp);
        setIcon(weatherInfo.data.weather[0].icon);
        setWeatherConditions(weatherInfo.data.weather[0].main);
      } catch (error) {
        console.log(error);
        if (searchCity) {
          if (error.message === 'Request failed with status code 404') {
            searchParams.delete('city');
            setSearchParams(searchParams);

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
    getWeatherByCity(city);
  }, [searchCity, searchParams, setSearchParams, city]);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <CityModal
        cityName={cityName}
        icon={icon}
        temperature={setTemp(isFahrenheit, temperature)}
        weatherConditions={weatherConditions}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <WeatherContainer onClick={openModalHandler}>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${weatherConditions}`}
        />
        <City>{cityName}</City>
        <Temp>
          {setTemp(isFahrenheit, temperature)}° {unit}
        </Temp>
      </WeatherContainer>
    </div>
  );
};

export default CityItem;
