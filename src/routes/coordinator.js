export const goToHomePage = (navigator) =>{
    navigator('/')
}
export const goToLoginPage = (navigator) =>{
    navigator('/login')
}

export const goToSignUpPage = (navigator) =>{
    navigator('/signup')
}

export const goToFeedPage = (navigator) =>{
    navigator('/feed')
}

export const goToRecipeDetailPage = (navigator, id) =>{
    navigator(`/recipe/${id}`)
}

export const goToAddRecipePage = (navigator) =>{
    navigator('/add-recipe')
}

