import styled from "styled-components";

export const FeedContainerStyled = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr; 
    width: 80vw;
    justify-items:center;
    padding-top:20px;
    grid-gap: 10px 0;
    margin: 0 auto;
`

export const RecipeCardStyled = styled.div`
    width:20vw;
    border: 1px solid black;
    border-radius:5px;
    transition:0.3s;
    &:hover{
        transform:scale(1.1);
        cursor:pointer;
    }
    img{
        padding:10px;
    }
`