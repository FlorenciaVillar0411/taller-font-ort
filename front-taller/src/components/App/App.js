import logo from './logo.svg';
import './App.css';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Login/>
    </ChakraProvider>
  );
}

export default App;
