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
  FormLabel,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { addMovimiento } from "../../../app/slices/movisSlice";
import { postMovimiento } from "../../../services/dwallet";
import { useDispatch } from "react-redux";



const Add = () => {
  const [btnDisabled, setDisable] = useState(true)
  const [rubro, setRubro] = useState([]); //array de datos

 
  
  const inputConceptoRef = useRef();
  const inputRubroRef = useRef();
  const inputMedioRef = useRef();
  const inputTypeRef = useRef();
  const inputMontoRef = useRef();
  const inputFechaRef = useRef();

  const dispatch = useDispatch()


  const onAddClick = (e) => {

    e.preventDefault();
    const concepto = inputConceptoRef.current.value;
    const rubro = inputRubroRef.current.value;
    const medio = inputMedioRef.current.value;
    const type = inputTypeRef.current.value;
    const monto = inputMontoRef.current.value;
    const fecha = inputFechaRef.current.value;

  

    setDisable(true);

    if (
      concepto !== "" &&
      rubro != "" &&
      medio != "" &&
      type != "" &&
      monto != "" &&
      fecha != ""
    ) {
      onAddMovimiento({
        concepto: concepto,
        rubro: rubro,
        medio: medio,
        type: type,
        monto: monto,
        fecha: fecha,
      });
    } else {
      alert("Por favor complete los campos");
    }
    setDisable(false);
  };

  const onAddMovimiento = async (movimiento) => {
    try {
      const resp = await postMovimiento(movimiento);
      dispatch(addMovimiento({ ...movimiento, id: resp.data.id }));
    } catch (e) {}

    /*const onLogOutClick = () => {
      props.onLogout(null);
    };*/
  };

    return (
      <Box>
        <Card class="card" w="1200px" h="300px">
          <CardHeader class="heading"></CardHeader>
          <CardBody>
            <FormControl isRequired>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <FormLabel>Gasto</FormLabel>
                  <Input
                    type="text"
                    placeholder="Concepto"
                    ref={inputConceptoRef}
                  />
                </GridItem>
                <GridItem w="100%" h="10">
                  <FormLabel>Seleccione un rubro</FormLabel>
                  <Select name="rubroId" ref={inputRubroRef}>
                    {rubro.map((rubro) => {
                      //recorro el state y muestro datos
                      <option key={rubro.id} value={rubro.id}>
                        {rubro.name}
                      </option>;
                    })}
                  </Select>
                </GridItem>
                <GridItem w="100%" h="10">
                  <FormLabel>Medio</FormLabel>
                  <Select placeholder="Medio" ref={inputMedioRef}></Select>
                </GridItem>

                <GridItem w="100%" h="10" m="30px" ml="0">
                  <FormLabel>Monto</FormLabel>
                  <Input type="text" placeholder="$$$" ref={inputMontoRef} />
                </GridItem>
                <GridItem w="100%" h="10" m="30px" ml="0">
                  <FormLabel>Fecha</FormLabel>
                  <Select
                    placeholder="Fecha"
                    ref={inputFechaRef}
                    type="date"
                  ></Select>
                </GridItem>
                <GridItem w="100%" h="10" m="60px" ml="0">
                  <Button onClick={onAddClick}>Submit</Button>
                </GridItem>
              </Grid>
            </FormControl>
          </CardBody>
        </Card>
      </Box>
    );
};
export default Add;
