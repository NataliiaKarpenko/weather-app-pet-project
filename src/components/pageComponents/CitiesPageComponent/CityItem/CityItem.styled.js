import styled from 'styled-components';

export const WeatherContainer = styled.li`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.contentBackground};
  transition: ${props => props.theme.transition};

  @media ${props => props.theme.media.tab} {
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 15px;
  }

  &:hover {
    cursor: pointer;
    scale: 1.01;
    box-shadow: 0px 2px 2px 2px ${props => props.theme.boxShadow};
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 40px;

  @media ${props => props.theme.media.tab} {
    width: 100px;
    height: 100px;
  }
`;

export const City = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.title};

  @media ${props => props.theme.media.tab} {
    font-size: 25px;
  }
`;

export const Temp = styled.p`
  margin-left: auto;
  font-weight: 400;
  font-size: 22px;
  color: ${props => props.theme.title};

  @media ${props => props.theme.media.tab} {
    font-size: 32px;
  }
`;
