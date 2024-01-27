import React from 'react';
import { NavLinks, Icon } from './navLinkSidebar.styled';

export default function NavLinkSidebar ({to, icon, title}) {
    return (
        <li>
            <NavLinks 
                strict="true"
                to={to} 
            >
                <Icon>{icon}</Icon>
                {title}
            </NavLinks>
        </li>
    );
};