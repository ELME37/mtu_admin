import styled from 'styled-components';
import { colors } from '../../style/themes';

export const Root = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 14px 30px;
    background-color: ${colors.blue};
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerRight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const BtnDisplaySidebar = styled.button`
    display: flex;
    margin: 0;
    margin-right: 30px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
`;

export const Svg = styled.svg`
    fill: ${colors.gold};
`;