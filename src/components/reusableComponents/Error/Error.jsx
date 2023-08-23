import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import error1 from '../../../images/error.png';
import error2 from '../../../images/error@2x.png';
import { Image, ImageContainer, ErrorText } from './Error.styled';

const Error = ({ open, setOpen }) => {
  const errorRef = useRef();

  return (
    <CSSTransition
      errorRef={errorRef}
      in={open}
      timeout={300}
      classNames="error"
      unmountOnExit
    >
      <ImageContainer ref={errorRef}>
        <Image srcSet={`${error2} 2x`} src={error1} alt="smiley" />
        <ErrorText>Oohps...</ErrorText>
      </ImageContainer>
    </CSSTransition>
  );
};

export default Error;
