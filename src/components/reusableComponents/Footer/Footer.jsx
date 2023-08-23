import { useState } from 'react';

import { FooterContainer } from '../../reusableComponents/StyleComponents/Container.styled';
import Logo from '../Logo/Logo';
import Menu from '../../reusableComponents/Menu/Menu';
import { StyledFooter } from './Footer.styled';
import MenuIcon from './MenuIcon/MenuIcon';

const Footer = ({ displayFlex }) => {
  const [open, setOpen] = useState(false);

  const menuOpenHandler = () => {
    setOpen(true);
  };
  console.log(displayFlex);

  return (
    <StyledFooter displayFlex={displayFlex}>
      <FooterContainer>
        <Logo />
        <MenuIcon menuOpenHandler={menuOpenHandler} />
      </FooterContainer>
      <Menu open={open} setOpen={setOpen} />
    </StyledFooter>
  );
};

export default Footer;
