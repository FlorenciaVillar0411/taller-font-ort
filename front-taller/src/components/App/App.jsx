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

  // const [loggedUser, setLoggedUser] = useState(user)

  // const user = localStorage.getItem('MovsApp')
  // ? JSON.parse(localStorage.getItem('MovsApp')) 
  // : null 

  // const onLogin = user => {
  //   loggedUser(user)
  //   localStorage.setItem('MovsApp', JSON.stringify(user))
  // }


  return (
    <ChakraProvider className="App">
      {loggedUser ? (
          <Dashboard user={loggedUser} />
        ) : (
          <Login onLogin={onLogin}/>
        )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registry />} />
        <Route path="/dashboard" element={
        <PrivateRoute> 
          <Dashboard></Dashboard>
        </PrivateRoute>} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
