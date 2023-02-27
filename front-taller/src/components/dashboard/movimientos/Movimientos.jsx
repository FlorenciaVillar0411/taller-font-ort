import { Box, Heading } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { setFilteredMovimientos, setMovimientos, setRubros } from '../../../app/slices/movisSlice';
import { getMovimientos, getRubros, registro } from '../../../services/dwallet';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Filter from './filter/Filter';

const Movimientos = (props) => {
  const movis = useSelector((state) => state.movis.filteredMovimientos);
  const user = useSelector((state) => state.user.loggedUser);
  const rubrosState = useSelector((state) => state.movis.rubros);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovimientosApi = async () => {
      const movs = [];
      const movis = await getMovimientos(user.id, user.apiKey);
      const rubros = rubrosState.lenght > 0 ? rubrosState : await getRubros(user.apiKey);
      movis.map((m) => {
        m.rubro = rubros.find(r => r.id === m.categoria).nombre;
        return movs.push(m);
      });
      dispatch(setMovimientos(movs));
      dispatch(setFilteredMovimientos(movs));
      dispatch(setRubros(rubros));
      console.log(movis);
    };
    getMovimientosApi();
  }, []);

  return (
    <Box>
      <Heading>Movimientos</Heading>
      {movis ? <Filter></Filter> : ''}
      <Table className="audit table">
        <Thead className="table-th">
          <Tr>
            <Th>Concepto</Th>
            <Th>Rubro</Th>
            <Th>Total</Th>
            <Th>Medio</Th>
            <Th>Fecha</Th>
          </Tr>
        </Thead>
        <Tbody className="table-body">
          {movis.map((m) => (
            <Tr>
              <Td>{m.concepto}</Td>
              <Td>{m.rubro}</Td>
              <Td>{m.total}</Td>
              <Td>{m.medio}</Td>
              <Td>{m.fecha}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
export default Movimientos;
