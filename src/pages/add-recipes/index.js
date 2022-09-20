import { Button,Textarea } from "@chakra-ui/react";
import { useForm } from "../../hooks";
import { CenteredPageContainer,FormContainer,ImageInput, DescriptionTextArea, TitleInput } from "../../components";
import { useEffect, useState } from "react";
import { goToFeedPage } from "../../routes";
import { PageTitleStyled } from "./style";
import { AddRecipe, validateName } from "../../constants";
import { useNavigate } from "react-router-dom";


export const AddRecipePage = () =>{
    const navigate = useNavigate()
    const [form, onChangeInputs, clearInputs] = useForm({
        title:"",
        description:"",
        image:"",
    });
    const [isTitleValid, setIsTitleValid] = useState(true)
    const [isUrlValid, setIsUrlValid]= useState(true)



    useEffect(() => {
        setIsTitleValid(validateName(form.title,4));
        setIsUrlValid(/http[s]?:\/\/[a-zA-Z]+\.com/.test(form.image));
    }, [form]);

    const onSubmit = async (e) =>{
        e.preventDefault();
        try{ 
            if(isUrlValid && isTitleValid ){
                await AddRecipe({
                // title: form.title,
                description: form.description,
                image:form.image
                
            }) ;
                alert("Receita adicionada com sucesso!")
                goToFeedPage(navigate)
            }
        } catch(e){
            alert(e.response.data.message);
        }
    }

return(
    <CenteredPageContainer>
        <FormContainer>
            <form onSubmit={onSubmit}>
                
                <PageTitleStyled>Adicionar nova receita</PageTitleStyled>
                <TitleInput 
                    value={form.title} 
                    onChange={onChangeInputs}
                    isValid={isTitleValid}  
                />
                <DescriptionTextArea
                    value={form.Url} 
                    onChange={onChangeInputs}
                    isValid={true}  
                />
                <ImageInput 
                    value={form.image} 
                    onChange={onChangeInputs}
                    isValid={isUrlValid}  
                />
                
            
            <Button type="submit" variant="formMain">Cadastrar</Button>
            </form>
        </FormContainer>
    </CenteredPageContainer>
    )
}