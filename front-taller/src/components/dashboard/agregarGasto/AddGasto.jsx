import Add from "../add/Add";
import { Box, Button, Heading } from '@chakra-ui/react'
import { setFilteredMovimientos, setMovimientos, setRubros } from '../../../app/slices/movisSlice';
import { getMovimientos, getRubros, registro } from '../../../services/dwallet';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddGasto = () => {
    const rubrosState = useSelector((state) => state.movis.rubros);
    const rubros = rubrosState ? rubrosState.filter(r => r.tipo === 'gasto') : [];
    return (
      <Box>
        <Heading>Agregar Gasto</Heading>
        <Add rubros={rubros}></Add>
    </Box>
    );
  };
  
  export default AddGasto;