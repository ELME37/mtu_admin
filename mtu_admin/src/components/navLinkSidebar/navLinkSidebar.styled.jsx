import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../style/themes";

export const NavLinks = styled(NavLink)`
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    color: ${colors.blue};
    margin: 10px;
    padding: 16px 20px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;

    &:hover {
        background-color: #ffffff80;
    }

    &.active {
        background-color: #ffffff;
        border: 2px ${colors.blue} solid;
        transition: all 0.4s ease;
    }
`;

export const Icon = styled.div`
    margin-right: 16px;
    font-size: 20px;
    fill: ${colors.gold};
`;

export const NavBtn = styled.div`
    position: relative;
    color: green;
    padding: 15px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 4px 10px;
    border-radius: 10px;
    cursor: pointer;
    background: ${(props) => props.open && "#fff"};
    &:hover {
        background: #ffffff24;
    }
`;

export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
    > span {
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 0 5px 6px;
        border-color: transparent transparent transparent #ffffff;
        pointer-events: none;
        transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(90deg)")};
        border-left: ${(props) => !props.open && "6px solid #ffffff"};
        transition: all 0.2s;
    }
`;

export const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #00000029;
    overflow: hidden;
    height: ${(props) => (props.$opened === "true" ? props.$tall * 22 + 20 : 0)}px;
    transition: all 0.4s ease;
    padding: ${(props) => (props.$opened === "true" ? "10px 0px" : "0px")};
    margin: 4px 0 2px;
`;

export const SubLinks = styled(NavLink)`
    color: #fff;
    padding: 0 20px;
    height 55px !important;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 2px 10px;
    border-radius: 10px;
    > span {
        margin-left: 14px;
    }

    &:hover {
        background-color: #ffffff80;
    }

    &.active {
        background-color: green;
        border: 2px ${colors.blue} solid;
        transition: all 0.4s ease;
    }
`;