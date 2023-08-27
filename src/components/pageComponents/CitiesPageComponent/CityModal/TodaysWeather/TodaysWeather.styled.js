import styled from 'styled-components';

export const HourlyForecastContainer = styled.div`
  border-top: 1px solid ${props => props.theme.secondaryText};
  border-bottom: 1px solid ${props => props.theme.secondaryText};
  padding-bottom: 15px;
  padding-top: 15px;

  @media ${props => props.theme.media.tab} {
    padding-bottom: 30px;
    padding-top: 30px;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.secondaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const HourlyForecastList = styled.ul`
  width: 100%;
  flex-wrap: none;
  display: flex;
`;

export const HourlyForecastItem = styled.li`
  &:nth-child(2) {
    border-right: 1px solid ${props => props.theme.secondaryText};
    border-left: 1px solid ${props => props.theme.secondaryText};
  }
`;

export const ForecastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.media.sx} {
    width: calc((350px - 30px) / 3);
  }

  @media ${props => props.theme.media.phone} {
    width: calc((350px - 30px) / 3);
  }

  @media ${props => props.theme.media.tab} {
    width: calc((550px - 60px) / 3);
  }
`;

export const Time = styled.p`
  font-weight: 500;
  color: ${props => props.theme.secondaryText};
`;

export const Image = styled.img`
  width: 80px;

  @media ${props => props.theme.media.tab} {
    width: 100px;
  }
`;

export const TempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Temp = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.primaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 22px;
  }
`;
