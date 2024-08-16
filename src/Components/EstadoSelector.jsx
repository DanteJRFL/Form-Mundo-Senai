import React, { useState } from 'react';
import { Select, Box, FormLabel, Text } from '@chakra-ui/react';

const estados = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' }
];

const EstadoSelector = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  const handleChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };

  return (
    <Box p={1} maxW="400px" mx="auto">
      <FormLabel htmlFor="estado" textAlign="center">Selecione a UF:</FormLabel>
      <Select
        id="estado"
        value={estadoSelecionado}
        onChange={handleChange}
        placeholder="Selecione..."
      >
        {estados.map((estado) => (
          <option key={estado.sigla} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default EstadoSelector;