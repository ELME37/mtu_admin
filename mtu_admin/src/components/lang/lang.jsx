import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Root, Button, Content, List, Item, FlagIcon } from './lang.styled';
import flagFR from './Flag_of_France.png';
import flagEN from './Flag_of_the_UK.png';

const getFlagImage = (language) => {
  switch (language) {
    case 'en':
      return flagEN;
    case 'fr':
      return flagFR;
    default:
      return null;
  }
};

export default function Lang() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'fr');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <Root>
      <Button onClick={toggleDropdown}>
        <FlagIcon src={getFlagImage(selectedLanguage)} alt={selectedLanguage} />
        {`${selectedLanguage}`}
      </Button>
      {isOpen && (
        <Content>
          <List>
            {['en', 'fr'].map((language) => (
              language !== selectedLanguage && (
                <Item key={language} onClick={() => handleLanguageSelect(language)}>
                  <FlagIcon src={getFlagImage(language)} alt={language} />
                  {language}
                </Item>
              )
            ))}
          </List>
        </Content>
      )}
    </Root>
  );
};
