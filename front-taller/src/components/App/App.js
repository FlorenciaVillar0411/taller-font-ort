import logo from './logo.svg';
import './App.css';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
import Registry from '../registry/Registry';
import { useState } from 'react';


function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const onLogin = user => {
    setLoggedUser(user);
  }
  const onLogout = () => {
    setLoggedUser(null);
  }
  return (
    <ChakraProvider>
      {loggedUser ? <Dashboard onLogout={onLogout}/> : <Login onLogin={onLogin}/>}
    </ChakraProvider>
  );
}

export default App;
