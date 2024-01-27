import styled from "styled-components";
import { colors } from "../../style/themes";

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 20px;
    border: 4px ${colors.gold} solid;
    background-color: ${colors.blue};
`;

export const Text = styled.p`
    margin: 0;
    line-height: 1.5;
    color: ${colors.gold};
`;

export const Contact = styled.button`
    margin-top: 20px;
    padding: 8px 10px;
    border-radius: 10px;
    color: ${colors.blue};
    border: 2px ${colors.gold} solid;
    cursor: pointer;
`;

export const Mail = styled.a`
    color: ${colors.blue};
`;