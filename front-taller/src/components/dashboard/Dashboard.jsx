import { Button } from '@chakra-ui/react';
import Movimientos from './movimientos/Movimientos';
import AddGasto from './agregarGasto/AddGasto';
import AddIngreso from './agregarIngreso/AddIngreso';
import { useDispatch } from 'react-redux';
import { setLogoutUser } from '../../app/slices/userSlice';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';
import IngresoPorRubro from './charts/IngresoPorRubro/IngresoPorRubro';
import GastoPorRubro from './charts/GastosPorRubro/GastosPorRubro';
import EvolucionGastos from './charts/evolucionGastos/EvolucionGastos';


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
      <section>
        <IngresoPorRubro></IngresoPorRubro>
        <GastoPorRubro></GastoPorRubro>
        <EvolucionGastos></EvolucionGastos>
      </section>
      <section>
        <Button onClick={onLogOutClick}>LogOut</Button>
      </section>
    </div>
  );
};

export default Dashboard;
