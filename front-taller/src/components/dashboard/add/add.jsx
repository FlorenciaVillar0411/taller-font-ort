import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    Input,
    Select,
    FormControl,
    FormLabel
  } 
  from "@chakra-ui/react";
  import {useRef, useState} from 'react'
  
  const Add = (onAddMov) => {

     /*const onLogOutClick = () => {
      props.onLogout(null);
    };*/

    /*const [btnFormDisable, setBtnFormDisable] = useState(true);
    const inputGastoRef = useRef()
    const inputRubroRef = useRef()
    const inputMedioRef = useRef()
    const inputMontoRef = useRef()
    const inputFechaRef = useRef()

    const validateInput = () => {
        if(inputGastoRef.current.value !== ""){
            setBtnFormDisable(false)
        }else{
            setBtnFormDisable(true)
        }
    }
   
  const onAddClick = e => { 

    e.preventDefault()
    const gasto = inputGastoRef.current.value
    const rubro = inputRubroRef.current.value
    const medio = inputMedioRef.current.value
    const monto = inputMontoRef.current.value
    const fecha = inputFechaRef.current.value

    setBtnFormDisable(true)

    if(gasto !== "" && rubro !== "" && medio !== "" && monto !== "" && fecha !== "" ){
        onAddMov({gasto: gasto, rubro: rubro, monto: monto, fecha: fecha })
    }else{
        alert('hubo un error')
    }
    setBtnFormDisable(false)
}*/

    return (
      <Box>
        <Card class="card" w="1200px" h="300px">
          <CardHeader class="heading">
          </CardHeader>
          <CardBody>
            <FormControl isRequired>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                <FormLabel>Gasto</FormLabel>
                  <Input type="text" placeholder="Concepto"/>
                </GridItem>
                <GridItem w="100%" h="10">
                <FormLabel>Seleccione un rubro</FormLabel>
                <Select placeholder="Seleccione un rubro"></Select>
                </GridItem>
                <GridItem w="100%" h="10">
                <FormLabel>Medio</FormLabel>
                <Select placeholder="Medio"></Select>
                </GridItem>

                <GridItem w="100%" h="10" m="30px" ml="0">
                <FormLabel>Monto</FormLabel>
                  <Input type="text" placeholder="$$$"/>
                </GridItem>
                <GridItem w="100%" h="10" m="30px" ml="0">
                <FormLabel>Fecha</FormLabel>
                <Select placeholder="Fecha"></Select>
                </GridItem>
                <GridItem w="100%" h="10" m="60px" ml="0">
                <Button>
              Submit
            </Button>
                </GridItem>
                </Grid>
                </FormControl>
                </CardBody>
             
        </Card>
        
      </Box>
    );
  };
  
  export default Add;