import styled from "styled-components";
import {theme} from '../../styles';

export const HeaderStyled = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: ${theme.colors.laranja["500"]};
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center
`