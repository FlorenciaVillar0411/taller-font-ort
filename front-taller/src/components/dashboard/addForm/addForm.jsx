import Add from "../add/add";
import { Box, Button, Heading } from '@chakra-ui/react'

const AddForm = (props) => {
    return (
      <Box>
        <Heading>Agregar Gasto</Heading>
        <Add></Add>
      <Heading>Agregar Ingreso</Heading>
      <Add></Add>
    </Box>
    );
  };
  
  export default AddForm;