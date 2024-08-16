import * as C from '@chakra-ui/react'
import { useState } from 'react'
import Step from './Components/Step'
import FormEndereco from './Pages/FormEndereco'
import FormPessoal from './Pages/FormPessoal'
import FormProjeto from './Pages/FormProjeto'



function App() {
  const[step, setStep] = useState(1)
  const Steps = [1,2,3]
  const GetCompStep = () =>{
    switch(step){
      case 1:
      return <FormPessoal/>

      case 2:
      return <FormEndereco/>

      case 3:
      return <FormProjeto/>

      default:
      return <formPessoal/>
    } 
  }
  return (
    <C.Flex h="100vh" align="center" justify="center">
     <C.Center maxW={500} w="100%" py={10} px={2} flexDirection="column" border="2px" borderColor="blackAlpha" borderRadius={10}>
        <C.HStack spacing={4}>
          {Steps.map((item) =>(
            <Step key={item} index={item} active={step===item}/>
          ))}
        </C.HStack>

        <C.Divider my={4} borderColor="blue.800"></C.Divider>

        <C.Box w="80%">{GetCompStep()}</C.Box>

        <C.HStack spacing={10} mt={4}>

          <C.Button bg="gray.200"
          onClick={() => step !==1 && setStep(step-1)}
          disabled={step===1}
          > Return
          </C.Button>

          <C.Button bg="gray.200"
          onClick={() => step !==3 && setStep(step+1)}
          >
          {step===3 ? "Send":"Next"}
          </C.Button>
          
        </C.HStack>
      </C.Center>
    </C.Flex>
  )
}

export default App