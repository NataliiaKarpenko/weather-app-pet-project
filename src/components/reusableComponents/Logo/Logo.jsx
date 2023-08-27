import umbrella1 from '../../../images/umbrella.png';
import umbrella2 from '../../../images/umbrella@2x.png';
import { Link, Image } from './Logo.styled';

const Logo = ({ status }) => {
  return (
    <Link to="/" status={status}>
      <Image srcSet={`${umbrella2} 2x`} src={umbrella1} alt="sun" />
    </Link>
  );
};

export default Logo;
