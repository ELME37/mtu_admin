// DropdownButton.js
import React, { useState } from 'react';
import {Root, DropdownContainer } from "./dropdownAccount.styled";
import { DropdownContent } from "./dropdownAccount.styled";
import { DropdownLink } from "./dropdownAccount.styled";
import { Dropbtn } from "./dropdownAccount.styled";

export default function DropdownAccount ({ buttonText, links}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Root>
    <DropdownContainer>
      <Dropbtn onClick={handleToggle}>
        {buttonText}
      </Dropbtn>
      <DropdownContent className={isOpen ? 'open' : ''}>
        {links.map((link, index) => (
          <DropdownLink key={index} to={link.to} onClick={closeDropdown}>
            {link.label}
          </DropdownLink>
        ))}
      </DropdownContent>
    </DropdownContainer>
    </Root>
  );
};
