import React from 'react';
import { useTranslation } from 'react-i18next';
import { Root, Text, Contact, Mail} from './footerSidebar.styled';

export default function FooterSidebar () {
    const { t, i18n } = useTranslation();
    return (
        <Root>
            <Text>{t("footerSidebar.question")}</Text>
            <Text>{t("footerSidebar.contact")}</Text>
            <Text>contact@mturquais.fr</Text>
            <Contact>
                <Mail href="mailto:contact@mturquais.fr">
                    {t("footerSidebar.mail")}
                </Mail>  
            </Contact>
        </Root>
    );
};