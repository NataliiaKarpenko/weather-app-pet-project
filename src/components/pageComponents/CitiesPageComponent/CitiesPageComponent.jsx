import { useState, useEffect } from 'react';
import CityItem from './CityItem/CityItem';
import { useSearchParams } from 'react-router-dom';
import { PageContainer } from 'components/reusableComponents/StyleComponents/PageContainer.styled';

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

  const [searchParams] = useSearchParams();
  const searchCity = searchParams.get('city');

  useEffect(() => {
    // Function to get 4 random cities from the array
    const getRandomCities = () => {
      const shuffledCities = cities.sort(() => 0.5 - Math.random()); // Shuffle the array
      const selectedCities = searchCity
        ? [searchCity, ...shuffledCities.slice(0, 4)]
        : shuffledCities.slice(0, 5); // Get the first 4 elements

      return selectedCities;
    };
    const selectedCities = getRandomCities();
    setRandomCities(selectedCities);
  }, [searchCity]); // Empty dependency array ensures it runs only on the initial render
  console.log(randomCities);

  return (
    <PageContainer>
      <ul>
        {randomCities.map(city => (
          <CityItem city={city} />
        ))}
      </ul>
    </PageContainer>
  );
};

export default CitiesPageComponent;
