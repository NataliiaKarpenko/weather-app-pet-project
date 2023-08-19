import WeatherPageComponent from '../components/pageComponents/WeatherPageComponent/WeatherPageComponent';

const WeatherPage = ({ handleLinkClick }) => {
  return (
    <div>
      <WeatherPageComponent handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default WeatherPage;
