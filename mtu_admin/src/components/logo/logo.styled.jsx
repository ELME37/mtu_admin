import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    `;

export const Links = styled(Link)`
    display: flex;
    position: relative;
    width: 120px;
    height: 80px;
`;

export const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

