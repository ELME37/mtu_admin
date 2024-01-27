import React from 'react';
import { Root, Text, Contact, Mail} from './footerSidebar.styled';

export default function FooterSidebar () {
    return (
        <Root>
            <Text>Une Question ?</Text>
            <Text>N'hésitez pas à me contacter à l'adresse suivante :</Text>
            <Text>contact@mturquais.fr</Text>
            <Contact>
                <Mail href="mailto:contact@mturquais.fr">
                    Envoyer un mail
                </Mail>  
            </Contact>
        </Root>
    );
};