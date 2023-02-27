import { Button } from '@chakra-ui/react';
import Movimientos from './movimientos/Movimientos';
import AddGasto from './agregarGasto/AddGasto';
import AddIngreso from './agregarIngreso/AddIngreso';
import { useDispatch } from 'react-redux';
import { setLogoutUser } from '../../app/slices/userSlice';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';


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
      <Button onClick={onLogOutClick}>LogOut</Button>
    </div>
  );
};

export default Dashboard;
