import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    margin: 0 30px;
`;

export const Label = styled.label`
    width: 60px;
    height: 30px;
    position: relative;
    display: block;
    background: #fff;
    border-radius: 20px;
    box-shadow: inset 0 5px 15px rgb(0,0,0,0.4), inset 0 -5px 15px rgb(255,255,255,0.4);
    cursor: pointer;
    transition: 0.3s;

    &:after {
        content:"";
        width: 26px;
        height: 26px;
        position: absolute;
        top: 2px;
        left: 2px;
        background: linear-gradient(180deg, #ffcc89, #d8860b);
        border-radius: 18px;
        box-shadow: 0 5px 10px rgb(0,0,0,0.2);
        transition: 0.3s;
    }
`;

export const Input = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;

    &:checked + label {
        background: #242424
    }

    &:checked + label:after {
        left: 58px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
    }

    &:checked + ${Label} > svg:first-child {
        fill: #7e7e7e;
    }

    &:checked + ${Label} > svg:last-child {
        fill: #fff;
    }
`;

export const Svg = styled.svg`
    position: absolute;
    width: 20px;
    top: 6px;
    z-index: 100;
`;

export const Sun = styled(Svg)`
   left: 4px;
   fill: #fff;
   transition: 0.3s;
`;

export const Moon = styled(Svg)`
    left: 34px;
    fill: #7e7e7e;
    transition: 0.3s;
`;