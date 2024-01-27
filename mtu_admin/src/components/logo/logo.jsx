import React from 'react';
import { Root, Img, Links } from "./logo.styled";
import ROUTES from '../../router/routes';
import logo from "./logo Talk'i.png"

export default function Logo () {
    return (
        <Root>
            <Links to={ROUTES.home}>
                <Img src={logo} alt="logo TalK'i" />
            </Links>
        </Root>
    );
};