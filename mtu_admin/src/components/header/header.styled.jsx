import styled from 'styled-components';
import { colors } from '../../style/themes';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 14px 30px;
    background-color: ${colors.blue};
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
`;