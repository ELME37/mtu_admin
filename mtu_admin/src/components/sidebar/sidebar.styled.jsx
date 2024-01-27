import styled from 'styled-components';
import { colors } from '../../style/themes';

export const Root = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    z-index: 999;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease-in-out;
`;

export const Container = styled.div`
    background-color: wheat;
    height: 100vh;
    overflow: hidden;
`;

export const List = styled.ul`
    display: block;
    position: relative;
    height: calc(100vh - 350px);
    padding: 0;
    overflow: auto;
    transition: all 0.5s ease;

    &::-webkit-scrollbar {
        width: 6px;
      }

    &::-webkit-scrollbar-thumb {
    background-color: ${colors.blue};
    border-radius: 4px;
    }

    scrollbar-width: 6px;
    scrollbar-color: ${colors.blue};
`;

/*export const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$isOpen ? '280px' : '120px')};
    width: 280px;
    height: 100vh;
    line-height: inherit;
    position: fixed;
    overflow: hidden;
    text-align: left;
    top: 0;
    transition: .3s;
    z-index: 999;
`;

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: yellow;
`;

export const SidebarBtn = styled.div`
    width: 80%;
    background-color: blue;
`;

export const StyledSVG = styled.svg`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;*/