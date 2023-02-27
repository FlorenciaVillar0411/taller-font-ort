import Add from "../add/Add";
import { Box, Button, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';

const AddIngreso = () => {
    const rubrosState = useSelector((state) => state.movis.rubros);
    const rubros = rubrosState ? rubrosState.filter(r => r.tipo === 'ingreso') : [];
    return (
      <Box>
        <Heading>Agregar Ingreso</Heading>
        <Add rubros={rubros}></Add>
    </Box>
    );
  };
  
  export default AddIngreso;