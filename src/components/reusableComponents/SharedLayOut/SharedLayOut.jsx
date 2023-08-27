import { Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

import Sidebar from '../Sidebar/Sidebar';
import { StyledContainer } from '../../reusableComponents/StyleComponents/Container.styled';
import { StyledMain } from '../../reusableComponents/StyleComponents/Main.styled';
import Spinner from '../Spinner/Spinner';
import InputForm from '../InputForm/InputForm';
import Footer from '../Footer/Footer';

const SharedLayOut = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [displayFlex, setDisplayFlex] = useState(null);
  const [calculatedHeight, setCalculatedHeight] = useState(0);
  const [refContentContainer, { height: heightContentContainer }] =
    useMeasure();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (viewportHeight >= heightContentContainer + 155) {
      setCalculatedHeight(heightContentContainer);
      setDisplayFlex(true);
    } else {
      setCalculatedHeight(viewportHeight);
      setDisplayFlex(false);
    }
  }, [viewportHeight, heightContentContainer]);

  const setMinHeight = () => {
    let minHeight;
    if (city) {
      if (windowWidth >= 1440) {
        minHeight = calculatedHeight + 40;
      } else if (windowWidth >= 768) {
        minHeight = calculatedHeight + 30;
      } else {
        minHeight = calculatedHeight + 15;
      }
    } else {
      minHeight = viewportHeight - 129;
    }
    return minHeight;
  };

  const minHeight = setMinHeight();

  return (
    <StyledMain displayFlex={displayFlex}>
      <StyledContainer style={{ minHeight: `${minHeight}` }}>
        {windowWidth >= 768 && (
          <Sidebar style={{ height: `${calculatedHeight}px` }} />
        )}
        <div ref={refContentContainer} style={{ height: '100%' }}>
          <InputForm />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      </StyledContainer>
      {windowWidth < 768 && <Footer displayFlex={displayFlex} />}
    </StyledMain>
  );
};

export default SharedLayOut;
