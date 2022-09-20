import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react'

export const ImageInput = ({isValid, value, onChange}) =>{
    return(
        <FormControl isInvalid={!isValid}>
            <FormLabel> Link da Imagem </FormLabel>
            <Input
                name="image"
                value={value}
                onChange={onChange}
                placeholder= "Coloque o link da imagem"
                />
                {!isValid ? (
            <FormErrorMessage as="p">
                Apenas links
            </FormErrorMessage>
                ) : undefined}
        </FormControl>
    )
}