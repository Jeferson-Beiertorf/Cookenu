import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    FormHelperText,
    Button,
} from '@chakra-ui/react'
import { useState } from "react";
import {FaEye, FaEyeSlash} from 'react-icons/fa';

export const PasswordInput = ({isValid, value, onChange}) =>{
    const [showPassword, setShowPassword] = useState(false)
    const onCLickShowPassword = () =>{
        setShowPassword(!showPassword)
    }
    

    return(
        <FormControl isInvalid={!isValid}>
        <FormLabel>Senha</FormLabel>
            <InputGroup size='md'>
                <Input
                    name="password"
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha com no mínimo 6 caracteres'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={onCLickShowPassword}>
                        {showPassword ? <FaEyeSlash/> : <FaEye/> }
                    </Button>
                </InputRightElement>
            </InputGroup>
                {!isValid ? (
            <FormHelperText as="p">
                Senha deve conter no mínimo 6 caracteres.
            </FormHelperText>
        ) : undefined}
        </FormControl>
    )
}