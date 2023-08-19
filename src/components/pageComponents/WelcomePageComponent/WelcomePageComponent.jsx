import { useEffect, useState } from 'react';

import { StyledWelcomePageContainer } from '../../reusableComponents/StyleComponents/Container.styled';
import { StyledWelcomePageMain } from '../../reusableComponents/StyleComponents/Main.styled';
import { showCurrentPosition } from '../../../services/API_services';
import Decoration from './Decoration/Decoration';
import Title from './Title/Title';
import Spinner from '../../reusableComponents/Spinner/Spinner';

const WelcomePageComponent = () => {
  const [localCity, setLocalCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const showCurrentWeather = async () => {
      setIsLoading(true);
      try {
        const city = await showCurrentPosition();

        setLocalCity(city);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    showCurrentWeather();
  }, []);

  return (
    <StyledWelcomePageMain>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledWelcomePageContainer>
          <Decoration />
          <Title localCity={localCity} />
        </StyledWelcomePageContainer>
      )}
    </StyledWelcomePageMain>
  );
};

export default WelcomePageComponent;
