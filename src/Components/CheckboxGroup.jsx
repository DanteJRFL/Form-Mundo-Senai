import React, { useState } from 'react';
import { Checkbox, Box, FormControl, FormLabel, VStack } from '@chakra-ui/react';

const CheckboxGroup = () => {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <Box p={4} maxW="400px" mx="auto">
      <FormControl>
        <FormLabel>Selecione a Unidade de Ensino:</FormLabel>
        <VStack align="start" spacing={4}>
          <Checkbox
            name="item1"
            isChecked={checkedItems.item1}
            onChange={handleChange}
          >
            CETCC
          </Checkbox>
          <Checkbox
            name="item2"
            isChecked={checkedItems.item2}
            onChange={handleChange}
          >
            CETAFAJU
          </Checkbox>
          <Checkbox
            name="item3"
            isChecked={checkedItems.item3}
            onChange={handleChange}
          >
            CETAFEST
          </Checkbox>
          <Checkbox
            name="item4"
            isChecked={checkedItems.item4}
            onChange={handleChange}
          >
            CETICC
          </Checkbox>
        </VStack>
      </FormControl>
    </Box>
  );
};

export default CheckboxGroup;