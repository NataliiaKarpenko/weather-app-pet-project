import styled from 'styled-components';

export const StyledMain = styled.div`
  position: relative;
  background: ${props => props.theme.mainPageBackground};
  min-height: 100vh;
  padding-top: 25px;

  @media ${props => props.theme.media.sx} {
    display: ${props => (props.displayFlex ? 'flex' : 'block')};
    flex-direction: ${props => (props.displayFlex ? 'column' : '')};
    justify-content: ${props => (props.displayFlex ? 'space-between' : '')};
  }

  @media ${props => props.theme.media.phone} {
    display: ${props => (props.displayFlex ? 'flex' : 'block')};
    flex-direction: ${props => (props.displayFlex ? 'column' : '')};
    justify-content: ${props => (props.displayFlex ? 'space-between' : '')};
  }

  @media ${props => props.theme.media.tab} {
    display: block;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const StyledWelcomePageMain = styled(StyledMain)`
  height: 100vh;
  padding-bottom: 25px;

  @media ${props => props.theme.media.tab} {
    padding-bottom: 40px;
  }
`;
