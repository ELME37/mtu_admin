import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Root = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const Links = styled(Link)`
    display: flex;
    position: relative;
    width: 100px;
    height: 60px;
`;

export const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

