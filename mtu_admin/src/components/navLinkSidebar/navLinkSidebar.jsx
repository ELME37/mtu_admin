import React, { useState } from 'react';
import { NavLinks, Icon, NavBtn, Arrow , SubMenu, SubLinks} from './navLinkSidebar.styled';

export default function NavLinkSidebar ({to, icon, title, subBtn}) {
    const [openSubMenu, setOpenSubMenu] = useState(false)

    const handleSubMenu = () => {
        setOpenSubMenu(!openSubMenu);
      };
    return (
        <li>
            {subBtn === undefined ? (
            <NavLinks 
                strict="true"
                to={to} 
            >
                <Icon>{icon}</Icon>
                {title}
            </NavLinks>
            ) : (
            <NavBtn onClick={() => handleSubMenu()}>
                <Icon>{icon}</Icon>
                {title}
                {subBtn !== undefined &&(
                    <Arrow open={!openSubMenu && "open"}>
                        <span></span>
                    </Arrow>
                )}
            </NavBtn>
            )}

            <SubMenu
                $tall={`${subBtn !== undefined && subBtn.length}`}
                $opened= {openSubMenu ? "true" : "false"}
            >
                {subBtn !== undefined &&
                    subBtn.map((btn, i) => (
                        <div key={i}>
                            <SubLinks
                                to={to + "/" + "historique" + "/" + btn.toLowerCase()}
                            >
                                <span>-</span>
                                <span>{btn}</span>
                            </SubLinks>
                        </div>
                    ))}
            </SubMenu>
        </li>
    );
};