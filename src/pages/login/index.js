import { useForm } from "../../hooks";
import { CenteredPageContainer,FormContainer, EmailInput,PasswordInput } from "../../components";
import {
    Button
} from '@chakra-ui/react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../components/assets/logo.svg'
import { validateEmail, validatePassword } from "../../constants";
import { goToSignUpPage, goToFeedPage } from "../../routes";
import axios from "axios";
import { Login } from "../../constants";


export const LoginPage = () =>{
    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({
        email:"",
        password:"",
    });
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid]= useState(true)

const onSubmit = async (e) =>{
    e.preventDefault();
    setIsEmailValid(validateEmail(form.email))
    setIsPasswordValid(validatePassword(form.password))
    try{ 
        const {token} = isEmailValid && isPasswordValid && await Login({
        email: form.email,
        password: form.password
    });
    localStorage.setItem('cookenu.token',token);
    goToFeedPage(navigate)
    } catch(e){
        alert(e.response.data.message);
    }
}
return(
    <CenteredPageContainer>
        <FormContainer>
            <form onSubmit={onSubmit}>
                <img src={Logo} alt="Logo do Cookenu" maxWidth="75%"/>
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
            
            <Button type="submit" variant="formMain">Entrar</Button>
            <Button onClick={()=> goToSignUpPage(navigate)} type="submit" variant="formSecundary">Não possui conta? Cadastrar </Button>
            </form>
        </FormContainer>
    </CenteredPageContainer>
    )
}