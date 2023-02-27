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
import { postMovimiento } from "../../../services/dwallet";
import { useDispatch, useSelector } from 'react-redux';
import { addMovimiento } from '../../../app/slices/movisSlice';


  import './Add.css'
  
  const Add = (props) => {

    const medios = ['Efectivo', 'Debito','Credito'];
    const user = useSelector((state) => state.user.loggedUser);


    const [btnFormDisable, setBtnFormDisable] = useState(true);
    const dispatch = useDispatch();

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
   
  const onAddClick = async () => { 
//    e.preventDefault()
    const concepto = inputGastoRef.current.value
    const categoria = parseInt(inputRubroRef.current.value);
    const medio = inputMedioRef.current.value
    const total = parseInt(inputMontoRef.current.value);
    const fecha = inputFechaRef.current.value

    //setBtnFormDisable(true)

    if(concepto && categoria && medio && total && fecha ){
        const newMov = {concepto, categoria, medio, total, fecha, idUsuario: user.id };
        console.log(newMov);
        const {codigo, idMovimiento} = await postMovimiento(newMov, user.apiKey);
        if(codigo === 200){
          dispatch(addMovimiento({...newMov, id: idMovimiento, rubro: props.rubros.find(r => r.id === newMov.categoria).nombre}));
        }
    }else{
        alert('hubo un error')
    }
    //setBtnFormDisable(false)
}

    return (
      <Box>
        <Card class="card" w="1200px" h="300px">
          <CardHeader class="heading">
          </CardHeader>
          <CardBody>
            <FormControl isRequired>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                <FormLabel>Concepto</FormLabel>
                  <Input type="text" placeholder="Concepto" ref={inputGastoRef}/>
                </GridItem>
                <GridItem w="100%" h="10">
                <FormLabel>Rubro</FormLabel>
                <Select placeholder="Seleccione un rubro" ref={inputRubroRef}>
                {props.rubros.map((item, index) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
                </Select>
                </GridItem>
                <GridItem w="100%" h="10">
                <FormLabel>Medio</FormLabel>
                <Select placeholder="Medio" ref={inputMedioRef}>
                {medios.map((item, index) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
                </Select>
                </GridItem>

                <GridItem w="100%" h="10" m="30px" ml="0">
                <FormLabel>Monto</FormLabel>
                  <Input type="number" placeholder="$$$" ref={inputMontoRef}/>
                </GridItem>
                <GridItem w="100%" h="10" m="30px" ml="0">
                <FormLabel>Fecha</FormLabel>
                <Input type='date' placeholder="Fecha" ref={inputFechaRef}/>
                </GridItem>
                <GridItem w="100%" h="10" m="60px" ml="0">
                <Button onClick={onAddClick}>
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