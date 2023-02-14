import Add from "../add/add";
import { Box, Button, Heading } from '@chakra-ui/react'

const AddForm = (props) => {
    const onLogOutClick = () => {
      props.onLogout(null);
    };



    return (
      <Box>
        <Heading>Agregar Gasto</Heading>
        <Add></Add>
      <Heading>Agregar Ingreso</Heading>
      <Add></Add>
      <Button mt="20px" onClick={onLogOutClick}>LogOut</Button>
    </Box>
    );
  };
  
  export default AddForm;