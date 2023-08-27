import styled from 'styled-components';

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  @media ${props => props.theme.media.tab} {
    padding: 20px 40px;
  }
`;

export const Title = styled.p`
  font-size: 15px;
  color: ${props => props.theme.secondaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 20px;
  }
`;

export const Time = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.secondaryText};

  @media ${props => props.theme.media.tab} {
    font-size: 20px;
  }
`;
