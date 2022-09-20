import { useForm } from "../../hooks";
import { CenteredPageContainer,FormContainer, EmailInput,PasswordInput,NameInput } from "../../components";
import {Button} from '@chakra-ui/react'
import { useState } from "react";
import { goToFeedPage } from "../../routes";
import Logo from '../../components/assets/logo.svg'
import { validateEmail, validatePassword, validateName, Signup } from "../../constants";
import { useNavigate } from "react-router-dom";


export const SignUpPage = () =>{
    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({
        email:"",
        password:"",
        name:"",
    });
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid]= useState(true)
    const [isNameValid, setIsNameValid]= useState(true)

const onSubmit = async (e) =>{
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email))
    setIsPasswordValid(validatePassword(form.password))
    setIsNameValid(validateName(form.name))
    try{ 
        const {token} = isNameValid &&  isEmailValid && isPasswordValid && await Signup({
        email: form.email,
        password: form.password,
        name:form.name
    });
    localStorage.setItem('cookenu.token',token);
        alert("Cadastro efetuado com sucesso! Seja Bem vindo")
    goToFeedPage(navigate)
    } catch(e){
        alert(e.response.data.message);
    }
}

return(
    <CenteredPageContainer>
        <FormContainer>
            <form onSubmit={onSubmit} >
                <img src={Logo} alt="Logo do Cookenu" width="83%"/>
                <NameInput 
                    value={form.name} 
                    onChange={onChangeInputs}
                    isValid={isNameValid}  
                />
                <EmailInput 
                    value={form.email} 
                    onChange={onChangeInputs}
                    isValid={isEmailValid}  
                />
                <PasswordInput
                    value={form.password} 
                    onChange={onChangeInputs}
                    isValid={isPasswordValid}  
                />
            
            <Button type="submit" variant="formMain">Cadastrar</Button>
            </form>
        </FormContainer>
    </CenteredPageContainer>
    )
}