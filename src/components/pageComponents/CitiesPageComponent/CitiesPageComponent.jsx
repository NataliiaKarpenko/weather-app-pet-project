import { useState, useEffect } from 'react';
import CityItem from './CityItem/CityItem';
import { useSearchParams } from 'react-router-dom';
import { PageContainer } from 'components/reusableComponents/StyleComponents/PageContainer.styled';
import {
  addLeadingZero,
  showContractedDay,
  showContractedMonth,
} from 'utils/getCurrentTime';
import { TimeContainer, Title, Time } from './CitiesPageComponent.styled';
import { nanoid } from 'nanoid';
import Spinner from 'components/reusableComponents/Spinner/Spinner';

const cities = [
  'Brasilia',
  'Kyiv',
  'Berlin',
  'London',
  'Madrid',
  'Bucharest',
  'Warsaw',
  '	Amsterdam',
  'Rome',
  'Dublin',
  'Riga',
  'Budapest',
  'Sao Paulo',
  'Osaka',
  'Beijing',
  'Cairo',
  'New York',
  'Seoul',
  'Athens',
  'Copenhagen',
  'Tallinn',
  'Prague',
  'Manila',
  'Delhi',
  'Brussels',
  'Shanghai',
  'Lagos',
  'Vienna',
  'Mexico City',
  'Mumbai',
  'Edinburgh',
];

const CitiesPageComponent = () => {
  const [randomCities, setRandomCities] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [searchParams] = useSearchParams();
  const searchCity = searchParams.get('city');

  const currentTime = new Date();
  const formattedDate = addLeadingZero(currentTime.getDate());
  const formattedDay = showContractedDay(currentTime.getDay());
  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  const formattedMonth = showContractedMonth(currentTime.getMonth());
  const formattedYear = currentTime.getFullYear();

  useEffect(() => {
    setIsLoading(true);
    // Function to get 4 random cities from the array
    const getRandomCities = () => {
      const shuffledCities = cities.sort(() => 0.5 - Math.random()); // Shuffle the array

      const selectedCities =
        searchCity && !shuffledCities.some(city => searchCity === city)
          ? [searchCity, ...shuffledCities.slice(0, 4)]
          : shuffledCities.slice(0, 5); // Get the first 4 elements

      return selectedCities;
    };
    const selectedCities = getRandomCities();
    setRandomCities(selectedCities);
    setIsLoading(false);
  }, [searchCity]); // Empty dependency array ensures it runs only on the initial render

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && (
        <PageContainer>
          <TimeContainer>
            <Title>Last updated:</Title>
            <div>
              <Time>
                {formattedDate} {formattedMonth}, {formattedYear}
              </Time>
              <Time>
                {formattedDay}, {formattedTime}
              </Time>
            </div>
          </TimeContainer>
          <ul>
            {randomCities.map(city => (
              <CityItem city={city} searchCity={searchCity} key={nanoid()} />
            ))}
          </ul>
        </PageContainer>
      )}
    </div>
  );
};

export default CitiesPageComponent;
