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
import { setMovimientos } from '../../../app/slices/movisSlice';
import { getMovimientos, getDeptos, registro } from '../../../services/dwallet';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Movimientos = (props) => {
  const movis = useSelector((state) => state.movis.movimientos);
  const user = useSelector((state) => state.user.loggedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovimientosApi = async () => {
      const arr = [];
      console.log(user);
      const movis = await getMovimientos(user.id, user.apiKey);
      movis.map((x) => {
        return arr.push(x);
      });
      dispatch(setMovimientos(arr));
    };
    getMovimientosApi();
  }, []);

  return (
    <Box>
      <Heading>Movimientos</Heading>
      <Table className="audit table">
        <Thead className="table-th">
          <Tr>
            <Th>Concepto</Th>
            <Th>Total</Th>
            <Th>Medio</Th>
            <Th>Fecha</Th>
          </Tr>
        </Thead>
        <Tbody className="table-body">
          {movis.map((m) => (
            <Tr>
              <Td>{m.concepto}</Td>
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
