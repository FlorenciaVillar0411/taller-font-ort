import { Button } from '@chakra-ui/react';
import Movimientos from './movimientos/Movimientos';
import AddGasto from './agregarGasto/AddGasto';
import AddIngreso from './agregarIngreso/AddIngreso';
import { useDispatch } from 'react-redux';
import { setLogoutUser } from '../../app/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import Montos from './montos/Montos';

import './Dashboard.css';
import IngresoPorRubro from './analisis/IngresoPorRubro/IngresoPorRubro';
import GastoPorRubro from './analisis/GastosPorRubro/GastosPorRubro';
import EvolucionGastos from './analisis/evolucionGastos/EvolucionGastos';
import Comparativo from './analisis/comparativo/Comparativo';


const Dashboard = (props, user) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const onLogOutClick = () => {
    dispatch(setLogoutUser());
    navigator('/login');
  };

  return (
    <div className='dashboard'>
      
      <Movimientos></Movimientos>
      <AddGasto></AddGasto>
      <AddIngreso></AddIngreso>
      <Montos></Montos>
      <section>
        <IngresoPorRubro></IngresoPorRubro>
        <GastoPorRubro></GastoPorRubro>
      </section>
      <section>
        <EvolucionGastos></EvolucionGastos>
        <Comparativo></Comparativo>
      </section>
      <section>
        <Button onClick={onLogOutClick}>LogOut</Button>
      </section>
    </div>
  );
};

export default Dashboard;
