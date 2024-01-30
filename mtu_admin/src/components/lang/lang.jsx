import React, {useState} from 'react';
import { Root, Button, Content, List, Item, FlagIcon } from './lang.styled';

import flagFR from './Flag_of_France.png';
import flagDE from './Flag_of_Germany.png';
import flagIT from './Flag_of_Italy.png';
import flagES from './Flag_of_Spain.png';
import flagEN from './Flag_of_the_UK.png';

const getFlagImage = (language) => {
  switch (language) {
    case 'EN':
      return flagEN;
    case 'DE':
      return flagDE;
    case 'FR':
      return flagFR;
    case 'ES':
      return flagES;
    case 'IT':
      return flagIT;
    default:
      return null;
  }
};

export default function Lang () {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('FR');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
      setIsOpen(false);
    };

    return (
        <Root>
          <Button onClick={toggleDropdown}>
            <FlagIcon src={getFlagImage(selectedLanguage)} alt={selectedLanguage} />
            {`${selectedLanguage}`}
          </Button>
          <Content>
            <List>
              {['EN', 'DE', 'FR', 'ES', 'IT'].map((language) => (
                language !== selectedLanguage && (
                  <Item key={language} onClick={() => handleLanguageSelect(language)}>
                    <FlagIcon src={getFlagImage(language)} alt={language} />
                    {language}
                  </Item>
                )
              ))}
            </List>
          </Content>
      </Root>
    );
};