import { NavLink } from 'react-router-dom';
import umbrella1 from '../../../images/umbrella.png';
import umbrella2 from '../../../images/umbrella@2x.png';
import { Image } from './Logo.styled';

const Logo = () => {
  return (
    <NavLink to="/">
      <Image srcSet={`${umbrella2} 2x`} src={umbrella1} alt="sun" />
    </NavLink>
  );
};

export default Logo;
