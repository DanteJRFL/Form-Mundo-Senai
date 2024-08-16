import React, { useState } from 'react';
import { Radio, RadioGroup, Stack, Box, FormControl, FormLabel } from '@chakra-ui/react';

const GenderSelector = () => {
  const [gender, setGender] = useState('');

  const handleChange = (value) => {
    setGender(value);
  };

  return (
    <Box p={4} maxW="200px" mx="auto">
      <FormControl>
        <FormLabel>Selecione seu gênero:</FormLabel>
        <RadioGroup onChange={handleChange} value={gender}>
          <Stack spacing={4} align="start">
            <Radio value="male">Masculino</Radio>
            <Radio value="female">Feminino</Radio>
            <Radio value="other">Prefiro não dizer</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default GenderSelector;