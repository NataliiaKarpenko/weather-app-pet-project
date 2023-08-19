import { useEffect } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Navigation from '../Navigation/Navigation';
import IconToggleOn from '../NavigationIcons/IconToggleOn';
import { ContentContainer } from './Menu.styled';
import { removeBodyscroll } from '../../../utils/removeBodyScroll';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const Menu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    removeBodyscroll(menuOpen);
  }, [menuOpen]);

  const nodeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setMenuOpen]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Backdrop handleBackdropClick={handleBackdropClick}>
      <CSSTransition
        nodeRef={nodeRef}
        in={menuOpen}
        timeout={1000}
        classNames="menu"
        unmountOnExit
      >
        <ContentContainer ref={nodeRef} className="menu">
          <Navigation menu="menu" handleLinkClick={handleLinkClick} />
          <IconToggleOn />
        </ContentContainer>
      </CSSTransition>
    </Backdrop>
  );
};

export default Menu;
