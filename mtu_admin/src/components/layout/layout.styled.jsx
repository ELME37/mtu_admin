import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: ${props => (props.$isSidebarOpen ? '280px' : '0')};
  transition: margin-left 0.3s ease-in-out;
`;