import { FeedContainerStyled,RecipeCardStyled } from "./style"
import { useEffect, useState } from "react"
import { ListRecipes } from "../../constants";
import { goToAddRecipePage, goToRecipeDetailPage } from "../../routes";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const FeedPage = () =>{
const navigate = useNavigate()
const [recipes, setRecipes ] = useState([]); 
    
    useEffect(()=>{
        ListRecipes()
        .then(data => {
            setRecipes(data);
        })
        .catch((e)=>{
            console.log(e);
        }
        )
    },[]);

const onClickCard = (id) =>{
    goToRecipeDetailPage(navigate, id)
}
const onClickAddButton=()=>{
    goToAddRecipePage(navigate)
}
    return(
        <FeedContainerStyled>
            {recipes.slice(0, 20).map((recipe, i)=> (
                <RecipeCardStyled key={i} onClick={()=>onClickCard(recipe.recipe_id)}>
                    <img src={recipe.image} alt={recipe.title}/>
                    <h3>{recipe.title}</h3>
                </RecipeCardStyled>
            ))}
            <Button onClick={()=>onClickAddButton()} variant="addRecipe">+</Button>
        </FeedContainerStyled>
    )
}