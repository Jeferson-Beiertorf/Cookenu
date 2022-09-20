import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react'

export const NameInput = ({isValid, value, onChange}) =>{
    return(
        <FormControl isInvalid={!isValid}>
            <FormLabel> Nome </FormLabel>
            <Input
                name="name"
                value={value}
                onChange={onChange}
                placeholder= "Nome"
                />
                {!isValid ? (
            <FormErrorMessage as="p">
                Nome deve conter pelo menos 4 caracteres.
            </FormErrorMessage>
                ) : undefined}
        </FormControl>
    )
}