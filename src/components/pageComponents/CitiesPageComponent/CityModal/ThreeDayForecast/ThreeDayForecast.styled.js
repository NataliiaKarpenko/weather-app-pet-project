import styled from 'styled-components';

export const ForecastContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 20px;

  @media ${props => props.theme.media.tab} {
    padding: 30px;
  }
`;

export const ForecastItem = styled.li`
  display: flex;
  align-items: center;
  height: calc((100%) / 7);
  font-size: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.secondaryText};
  }

  @media ${props => props.theme.media.tab} {
    font-size: 20px;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.secondaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 20px;
  }
`;

export const ItemBox = styled.div`
  width: calc(100% / 4);
  font-weight: 500;

  &:first-child {
    color: ${props => props.theme.secondaryText};
  }

  &:nth-child(2) {
    margin-right: 10px;
  }

  &:nth-child(3) {
    color: ${props => props.theme.primaryText};
  }

  &:nth-child(4) {
    text-align: end;
    color: ${props => props.theme.dark.secondaryText};
  }
`;

export const Max = styled.span`
  color: ${props => props.theme.primaryText};
`;

export const Min = styled.span`
  color: ${props => props.theme.secondaryText};
`;

export const Icon = styled.img`
  width: 70px;

  @media ${props => props.theme.media.tab} {
    width: 100px;
  }
`;
