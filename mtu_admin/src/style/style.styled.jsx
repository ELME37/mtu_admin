import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    position: relative;
}

html,
body {
    width: 100%;
    margin: 0;
    padding: 0;
    
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}
`

