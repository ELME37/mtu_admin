import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.$isSidebarOpen ? 'calc(100% - 280px)' : '100%')};
  margin-left: ${props => (props.$isSidebarOpen ? '280px' : '0')};
  transition: width 0.3s ease-in-out, margin-left 0.3s ease-in-out;
`;