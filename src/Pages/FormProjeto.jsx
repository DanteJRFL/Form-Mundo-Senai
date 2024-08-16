import * as C from '@chakra-ui/react'
import CheckboxGroup from '../Components/CheckboxGroup'

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
            <h1>CADASTRO PROJETO</h1>
            <C.Input type="text" placeholder="Insira o Projeto"/>
            <C.Input type="text" placeholder="Área de Atuação"/>
            <CheckboxGroup />
            <C.Input type="text" placeholder="Coordenador/Professor"/>

        </C.VStack>
    )
}

export default FormProjeto