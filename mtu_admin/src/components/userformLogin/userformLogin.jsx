import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Root, ContentLogin, ContentSignUp, Form, TitleLogin, TitleSignUp, InputLogin, InputSignUp, 
    ContainerError, Error, ContainerLinksLogin, ContainerLinksSignUp, LinksLogin, LinksSignUp, TextLinkSignUp, 
    LinkLogin, Button } from './userformLogin.styled';

export default function UserformLogin () {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);

    const { handleSubmit: handleSubmitLogin, register: registerLogin, formState: { errors: errorsLogin } } = useForm();
    const onSubmitLogin = (data) => console.log(data);

    const { handleSubmit: handleSubmitSignup, register: registerSignup, formState: { errors: errorsSignup } } = useForm();
    const onSubmitSignup = (data) => console.log(data);

    const toggleSignUp = () => {
        setIsSignUpVisible(!isSignUpVisible);
    };

    return (
        <Root>
            <ContentLogin $isVisible={!isSignUpVisible}>
                <TitleLogin>Connexion</TitleLogin>
                <Form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                    <InputLogin type="email" autoComplete="none" placeholder="Email" {...registerLogin('email', { required: true})}/>
                    <ContainerError>
                        {errorsLogin.email && <Error>L'email doit être renseigné</Error>}
                    </ContainerError> 
                    <InputLogin type="password" autoComplete="none" placeholder="Mot de passe"{...registerLogin('password', { required: true})}/>
                    <ContainerError>
                        {errorsLogin.password && <Error>Le mot de passe doit être renseigné</Error>}
                    </ContainerError>
                    <ContainerLinksLogin>
                        <LinksLogin href="#">Mot de passe oublié</LinksLogin>
                        <LinkLogin href="#" onClick={toggleSignUp}>Créer un compte</LinkLogin>
                    </ContainerLinksLogin>
                    <Button type="submit">Se connecter</Button>
                </Form>
            </ContentLogin>

            <ContentSignUp $isVisible={isSignUpVisible}>
                <TitleSignUp>Inscription</TitleSignUp>
                <Form onSubmit={handleSubmitSignup(onSubmitSignup)}>
                    <InputSignUp type="text" autoComplete="none" placeholder="Entreprise" {...registerSignup('entreprise', { required: true})}/>
                    <ContainerError>
                        {errorsSignup.email && <Error>Le nom de votre entreprise doit être renseigné</Error>}
                    </ContainerError> 
                    <InputSignUp type="email" autoComplete="none" placeholder="Email" {...registerSignup('email', { required: true, 
                        pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}, })}/>
                    <ContainerError>
                        {errorsSignup.email && <Error>L'adresse email invalide</Error>}
                    </ContainerError> 
                    <InputSignUp type="password" autoComplete="none" placeholder="Mot de passe"{...registerSignup('password', { required: true, 
                        minLength: {value: 8},
                        pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/},
                    })}/>
                    <ContainerError>
                        {errorsSignup.password && 
                            <Error>Le mot de passe doit contenir: (8 caractères, 1 lettre majuscule, 1 lettre minuscule, 1 chiffre)</Error>
                        }
                    </ContainerError>
                    <Button type="submit">Créer un compte</Button>
                    <ContainerLinksSignUp>
                        <TextLinkSignUp>Vous avez déjà un compte?</TextLinkSignUp>
                        <LinksSignUp href="#" onClick={toggleSignUp}>Se connecter</LinksSignUp>
                    </ContainerLinksSignUp>
                </Form>
            </ContentSignUp>
        </Root>
    );
};
