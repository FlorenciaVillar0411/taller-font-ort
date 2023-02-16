import { Button } from '@chakra-ui/react';
import AddForm from './addForm/addForm';
import Movimientos from './movimientos/Movimientos';
import { useDispatch } from 'react-redux';
import { setLogoutUser } from '../../app/slices/userSlice';
//import { useEffect, useState } from "react";
//import { getMovimientos } from "../../services/dwallet";
//import MovimientosFilter from './filter/Filter

const Dashboard = (props, user) => {
  //const [movimientos, setMovimientos] = useState([]) ESTE ES EL ORIGINAL
  //const [MovimientosFiltered, setFilteredMovimientos] = useState([]) ESTA ES LA LISTA FILTRADA

  //useEffect(() => {

  //getMovimientos(user.idUsuario, user.token).then(data => {
  //setMovimientos(data)
  // })
  //.catch(e => console.error('Se ha producido un error'))
  //}, []);

  //const onFilterMovimientos = filter => {
  /*if(filter == "gastos"){
      const gastos = movimientos.filter(gastoMov => !gastoMov.ingresos)
      setFilteredMovimientos(gastos)
    }else if(filter == "inversiones"){
      const inversiones = movimientos.filter(inversionMov => !inversionMov.gastos)
      setFilteredMovimientos(inversiones)
    }else {
      setFilteredMovimientos(movimientos)
    }
  }*/

  const dispatch = useDispatch();

  const onLogOutClick = () => {
    dispatch(setLogoutUser());
  };

  return (
    <div>
      <Movimientos></Movimientos>
      <AddForm></AddForm>
      <Button onClick={onLogOutClick}>LogOut</Button>
      {/*<GetMovimientos onFilter={onFilterMovimientos} />*/}
      {/*movimientos.length > 0 ? (< MovimientosFilter movimientos={MovimientosFiltered} /> ) : ('Cargando...')} */}
    </div>
  );
};

export default Dashboard;
