import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import Navigation from '../Navigation/Navigation';
import IconToggleOn from '../NavigationIcons/IconToggleOn';
import { ContentContainer, StyledBackdrop } from './Menu.styled';
import { removeBodyscroll } from '../../../utils/removeBodyScroll';

const Menu = ({ open, setOpen }) => {
  const menuRef = useRef();
  useEffect(() => {
    removeBodyscroll(open);
  }, [open]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setOpen]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setOpen(false);
    }
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <CSSTransition
      menuRef={menuRef}
      in={open}
      timeout={300}
      classNames="menu"
      unmountOnExit
    >
      <StyledBackdrop onClick={handleBackdropClick}>
        <ContentContainer>
          <Navigation status="menu" handleLinkClick={handleLinkClick} />
          <IconToggleOn />
        </ContentContainer>
      </StyledBackdrop>
    </CSSTransition>
  );
};

export default Menu;
