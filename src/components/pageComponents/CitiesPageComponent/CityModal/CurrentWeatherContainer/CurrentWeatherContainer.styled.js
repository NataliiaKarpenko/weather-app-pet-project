import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const City = styled.p`
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 600;
  color: ${props => props.theme.primaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 30px;
  }
`;

export const Time = styled.p`
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.secondaryText};
  span {
    font-size: 18px;
  }
`;

export const Temp = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.theme.primaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 32px;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;

  @media ${props => props.theme.media.tab} {
    width: 150px;
    height: 150px;
  }
`;
