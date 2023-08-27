import { useLocation, useNavigate } from 'react-router-dom';
import { StyledMenuIcon, Button } from './FooterIcon.styled';

const ArrowIcon = ({ status }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const backlinkHref = location.state?.from ?? '/weather';

  const handleBtnClick = () => {
    navigate(backlinkHref ?? '/', { replace: true });
  };
  return (
    <Button onClick={handleBtnClick} status={status}>
      <StyledMenuIcon viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
        />
      </StyledMenuIcon>
    </Button>
  );
};

export default ArrowIcon;
