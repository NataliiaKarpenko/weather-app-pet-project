import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { ModalContainer, StyledBackdrop, Button } from './CityModal.Styled';
import CurrentWeatherContainer from './CurrentWeatherContainer/CurrentWeatherContainer';

import TodaysWeather from './TodaysWeather/TodaysWeather';
import { useEffect } from 'react';
import { requestLocalTime } from 'services/API_services';
import { useState } from 'react';
import ThreeDayForecast from './ThreeDayForecast/ThreeDayForecast';
import { removeBodyscroll } from 'utils/removeBodyScroll';
import Spinner from 'components/reusableComponents/Spinner/Spinner';
import InputClose from 'components/reusableComponents/InputForm/InputIcons/InputClose';

const CityModal = ({
  cityName,
  icon,
  temperature,
  weatherConditions,
  openModal,
  setOpenModal,
}) => {
  const modalRef = useRef();
  const [localTime, setLocalTime] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    removeBodyscroll(openModal);
  }, [openModal]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setOpenModal(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setOpenModal]);

  useEffect(() => {
    setIsLoading(true);
    const getLocalTime = async city => {
      if (!openModal) {
        return;
      }
      try {
        const time = await requestLocalTime(city);
        setLocalTime(time);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    getLocalTime(cityName);
  }, [cityName, openModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setOpenModal(false);
    }
  };

  const handleCloseClick = () => {
    setOpenModal(false);
  };

  return (
    <>
      {isLoading && openModal && <Spinner />}
      {!isLoading && (
        <CSSTransition
          modalRef={modalRef}
          in={openModal}
          timeout={300}
          classNames="modal"
          unmountOnExit
          ref={modalRef}
        >
          <StyledBackdrop onClick={handleBackdropClick}>
            <ModalContainer>
              <Button status="modal">
                <InputClose onClick={handleCloseClick} />
              </Button>
              <CurrentWeatherContainer
                cityName={cityName}
                icon={icon}
                temperature={temperature}
                weatherConditions={weatherConditions}
                localTime={localTime}
              />
              <TodaysWeather cityName={cityName} localTime={localTime} />
              <ThreeDayForecast cityName={cityName} />
            </ModalContainer>
          </StyledBackdrop>
        </CSSTransition>
      )}
    </>
  );
};

export default CityModal;
