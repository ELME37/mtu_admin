import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinks = styled(NavLink)`
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    color: #25354e;
    margin: 20px 10px;
    padding: 16px 20px;
    border-radius: 10px;

    &:hover {
        background-color: #ffffff24;
    }

    &.active {
        background-color: #ffffff;
        color: #4297ff;
        transition: all 0.4s ease;
    }
`;

export const Icon = styled.div`
    margin-right: 14px;
    font-size: 20px;
`;