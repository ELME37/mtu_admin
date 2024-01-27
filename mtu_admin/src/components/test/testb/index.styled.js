import {styled} from 'styled-components';


export const Root = styled.div``

export const Title = styled(Title)``

export const Container = styled.div`

    ${Title} {
        color:red;
    }
`



export const Subtitle = styled.h3``

export const Button = styled(ButtonGenerique)`

    &:{

    }

    ${({isOpen}) => isOpen && `

    `}
`



export const ButtonLarge = styled(NavLink)`
    color:red;
`
export const ButtonSmall = styled(Button)``