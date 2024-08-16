import * as C from '@chakra-ui/react'
import GenderSelector from '../Components/GenderSelector'

const FormPessoal = () => {
    return(
        <C.VStack spacing={5}>
            <h1>CADASTRO PESSOAL</h1>
            <C.Input type="email" placeholder="Insira seu e-mail"/>
            <C.Input type="text" placeholder="Insira seu Nome"/>
            <C.Input type="text" placeholder="Insira seu Telefone"/>
            <C.Input type="text" placeholder="Insira seu CPF"/>
            <GenderSelector/>

        </C.VStack>
    )
}

export default FormPessoal