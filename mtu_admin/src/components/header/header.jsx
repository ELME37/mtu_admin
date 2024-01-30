import React from 'react';
import { Root, ContainerLeft, ContainerRight, BtnDisplaySidebar, Svg } from "./header.styled";
import Searchbar from '../searchbar/searchbar';
import DropdownAccount from '../dropdownAccount/dropdownAccount';
import Sidebar from '../sidebar/sidebar';
import Lang from '../lang/lang';
import Theme from '../theme/theme';
import ROUTES from '../../router/routes';

export default function Header ({ toggleSidebar, isSidebarOpen }) {
    return (
        <Root $isSidebarOpen={isSidebarOpen}>
            <Sidebar isOpen={isSidebarOpen} />
            <ContainerLeft>
                <BtnDisplaySidebar className='displaySidebar'onClick={toggleSidebar}>
                    <Svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/></Svg>
                </BtnDisplaySidebar>
                <Searchbar/>
            </ContainerLeft>
            <ContainerRight>
                <Lang/>
                <Theme/>
                <DropdownAccount
                 buttonText="MTU" 
                 links={[
                    { to: ROUTES.account, label: 'Compte utilisateur' },
                    { to: ROUTES.login, label: 'Connexion' },
                ]} />
            </ContainerRight>
        </Root>
    );
};