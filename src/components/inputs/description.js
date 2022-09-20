import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react'

export const DescriptionTextArea = ({isValid, value, onChange}) =>{
    return(
        <FormControl isInvalid={!isValid}>
            <FormLabel> Descrição </FormLabel>
            <Input
                name="description"
                value={value}
                onChange={onChange}
                placeholder= "Descrição da receita"
                />
                {!isValid ? (
            <FormErrorMessage as="p">
                Descrição deve conter pelo menos 2 caracteres.
            </FormErrorMessage>
                ) : undefined}
        </FormControl>
    )
}