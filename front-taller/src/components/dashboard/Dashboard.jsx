import { Button } from "@chakra-ui/react";
import AddForm from "./addForm/addForm";
import Movimientos from './movimientos/Movimientos';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setLogoutUser } from "../../app/slices/userSlice";
import { getMovimientos } from "../../services/dwallet";
import MovimientosTable from './movimientosTable/MovimientosTable';
//import {useEffect, useState} from 'react';

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
  const navigator = useNavigate();

  const onLogOutClick = () => {
    dispatch(setLogoutUser());
    navigator('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <AddForm></AddForm>
      <Movimientos></Movimientos>
      <Button onClick={onLogOutClick}>LogOut</Button>
      {/*<GetMovimientos onFilter={onFilterMovimientos} />*/}
      {/*movimientos.length > 0 ? (< MovimientosFilter movimientos={MovimientosFiltered} /> ) : ('Cargando...')} */}
    </div>
  );
};

export default Dashboard;
