import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: ${props => (props.displayFlex ? '' : 'sticky')};
  bottom: ${props => (props.displayFlex ? '' : '0')};

  z-index: 10;
  margin-top: 10px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border: 10px solid ${props => props.theme.mainPageBackground};
  border-bottom: none;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  background-color: ${props => props.theme.contentBackground};
`;
