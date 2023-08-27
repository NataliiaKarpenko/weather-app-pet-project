import { useTemperature } from 'hooks/TemperatureContext';
import { setTemp } from 'utils/setTemp';
import { addLeadingZero } from 'utils/getCurrentTime';

import {
  Image,
  StyledContainer,
  City,
  Temp,
  Time,
} from './CurrentWeatherContainer.styled';

const CurrentWeatherContainer = ({
  cityName,
  icon,
  temperature,
  weatherConditions,
  localTime,
}) => {
  const { isFahrenheit } = useTemperature();
  const unit = isFahrenheit ? 'F' : 'C';

  const { localHours } = localTime;
  const { localMinutes } = localTime;
  const minutes = addLeadingZero(localMinutes);
  const hours = addLeadingZero(localHours);
  const formattedTime = `${hours}:${minutes}`;

  return (
    <StyledContainer>
      <div>
        <City>{cityName}</City>
        <Time>
          Local time: <span>{formattedTime}</span>
        </Time>
        <Temp>
          {setTemp(isFahrenheit, temperature)}° {unit}
        </Temp>
      </div>
      <div>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png `}
          alt={weatherConditions}
        />
      </div>
    </StyledContainer>
  );
};

export default CurrentWeatherContainer;
