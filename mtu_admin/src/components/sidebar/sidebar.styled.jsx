import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Root = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    z-index: 999;
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
    padding; 0;
    transition: all 0.5s ease;
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