// DropdownButton.js
import React, { useState } from 'react';
import { DropdownContainer } from "./dropdown.styled";
import { DropdownContent } from "./dropdown.styled";
import { DropdownLink } from "./dropdown.styled";
import { Dropbtn } from "./dropdown.styled";

export default function Dropdown ({ buttonText, links, trigger }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <Dropbtn onClick={() => trigger === 'click' && handleToggle()}>
        {buttonText}
      </Dropbtn>
      <DropdownContent $trigger={trigger} className={isOpen ? 'open' : ''}>
        {links.map((link, index) => (
          <DropdownLink key={index} to={link.href} onClick={closeDropdown}>
            {link.label}
          </DropdownLink>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};
