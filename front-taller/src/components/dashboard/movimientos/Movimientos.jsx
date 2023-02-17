import { Box, Heading, RadioGroup, Radio, Stack  } from "@chakra-ui/react";
import { useState } from "react";



const Movimientos = (props) => {
  const [value, setValue] = useState('1')

  return (
    <Box>
      <Heading>Movimientos</Heading>
      <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1'>Gastos</Radio>
        <Radio value='2'>Ingresos</Radio>
        <Radio value='3'>Todos</Radio>
      </Stack>
    </RadioGroup>
    </Box>
  );
};
export default Movimientos;
