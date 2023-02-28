//import "bootstrap-css-only"; //por las dudas si lo usamos
//import logo from './logo.svg';
import './App.css';
import Login from '../login/Login';
import Registry from '../registry/Registry';
import Dashboard from '../dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import PrivateRoute from '../privateRoute';

const App = () => {

  const loggedUser = useSelector((state) => state.user.loggedUser);

  return (
    <ChakraProvider className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registry />} />
        <Route path="/dashboard" element={<PrivateRoute> 
          <Dashboard></Dashboard>
        </PrivateRoute>}/>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
