import { useLocation } from 'react-router-dom';
import ArrowIcon from '../Footer/FooterIcons/ArrowIcon';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { StyledSidebar } from './Sidebar.styled';

const Sidebar = ({ style }) => {
  const location = useLocation();
  const citiesPage = location.pathname.includes('/cities');
  return (
    <StyledSidebar style={style} citiesPage={citiesPage}>
      {citiesPage && <ArrowIcon status="sidebar" />}
      <Navigation />
      <ThemeToggler />
    </StyledSidebar>
  );
};

export default Sidebar;
