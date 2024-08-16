import * as C from '@chakra-ui/react'
import React from 'react'
import EstadoSelector from '../Components/EstadoSelector'

const FormEndereco = () => {
    return(
        <C.VStack spacing={5} alignItems="center">
            <h1>CADASTRO ENDEREÇO</h1>
            <C.Input type="text" placeholder="Insira o CEP"/>
            <C.Input type="text" placeholder="Insira o Bairro"/>
            <EstadoSelector/> 
        </C.VStack>
    )
}
export default FormEndereco