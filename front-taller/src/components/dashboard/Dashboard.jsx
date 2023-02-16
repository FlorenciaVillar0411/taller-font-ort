import { Button } from '@chakra-ui/react';
import Movimientos from './movimientos/Movimientos';
import { useDispatch } from 'react-redux';
import { setLogoutUser } from '../../app/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props, user) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const onLogOutClick = () => {
    dispatch(setLogoutUser());
    navigator('/login');
  };

  return (
    <div>
      <Movimientos></Movimientos>
      <Button onClick={onLogOutClick}>LogOut</Button>
    </div>
  );
};

export default Dashboard;
