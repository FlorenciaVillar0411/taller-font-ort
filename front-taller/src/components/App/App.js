//import "bootstrap-css-only"; //por las dudas si lo usamos
//import logo from './logo.svg';
import './App.css';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
//import Registry from '../registry/Registry';
import { useSelector } from 'react-redux'
import AddForm from '../dashboard/addForm/addForm';



const App = () => {


  
  /*const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem('isloggedIn');

    if(storedUserLoggedInformation === '1'){
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (user, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }
  const onLogout = () => {
    localStorage.removeItem('isLoggedIn', '1');
    setIsLoggedIn(false);
  }*/
  const loggedUser = useSelector(state => state.user.loggedUser)

  return (
    <ChakraProvider className="App">
      {loggedUser ? <Dashboard/> : <Login/>}
      {/*{loggedUser ? <Dashboard user={loggedUser}/> : <Login onLogin={onLogin}/>}*/}
    </ChakraProvider>
  );
  }
/*<ChakraProvider>
{isLoggedIn ? <Dashboard onLogout={onLogout}/> : <Login onLogin={onLogin}/>}
{isLoggedIn ? <Dashboard user={isLoggedIn}/> : <Login onLogin={onLogin}/>}
</ChakraProvider>
  );
}*/

export default App;
