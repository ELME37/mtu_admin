import React from 'react'
import {Root, Container, Button, Subtitle, Title } from './index.styled'


function TestB(){
    return (
        <Root>
            <Container>
                <Title>Mon super titre</Title>
                <SubTitle>Mon super titre</SubTitle>
                <DefaultSubtitle>Mon super titre</DefaultSubtitle>
                
                <ButtonLarge to="/qsdqsd" >Mon super titre</ButtonLarge>
                <Button isOpen={isOpen}></Button>
            </Container>
        </Root>
    )
}

export default TestB;