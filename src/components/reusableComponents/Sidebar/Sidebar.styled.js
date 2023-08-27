import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  width: 100%;
  padding-bottom: 60px;
  border-radius: 50px;
  border-radius: 50px;
  min-height: 551px;

  background-color: ${props => props.theme.contentBackground};
  padding-top: ${props => (props.status === 'citiesPage' ? '0' : '50px')};
`;
