import { useRef, useState } from 'react';
import { login } from '../../services/dwallet';
import { useDispatch } from 'react-redux';
import { setLoginUser } from '../../app/slices/userSlice';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Text,
  Heading,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';

const Login = (props) => {


  const [error, setError] = useState();
  const [btnDesactivado, setDesactivado] = useState(true);

  const inputUsername = useRef();
  const inputPassword = useRef();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const validarForm = () => {
    const userName = inputUsername.current.value;
    const password = inputPassword.current.value;

    if (userName && password !== '') {
      setDesactivado(false);
    } else {
      setDesactivado(true);
    }
  };

  const onLogInClick = async ({ onLogin }) => {

   

    const userName = inputUsername.current.value;
    const password = inputPassword.current.value;

  
    const mostrarError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4500);
    };
    

    if (userName && password) {
      //esto es para que mientras se este enviando el boton quede deshabilitado
      setDesactivado(true);
      const data = await login(userName, password);
      dispatch(
        setLoginUser({
          id: data.id,
          apiKey: data.apiKey,
        })
      );
      navigator('/dashboard');
    } else {
      mostrarError();
    }
  };



  return (
    <div className="login">
      <Card class="card">
        <CardHeader class="heading">
          <Heading>Log in</Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <br />
            <Input
              type="text"
              placeholder="username"
              ref={inputUsername}
              onChange={validarForm}
            />
            <br />
            <Input
              type="password"
              placeholder="password"
              ref={inputPassword}
              onChange={validarForm}
            />
            <br />
            <Text>
              Not Registered?{' '}
              <Link color="teal.500" href="/registro">
                Register
              </Link>
            </Text>
            <br />
            <Button onClick={onLogInClick} disabled={btnDesactivado}>
              Submit
            </Button>
            {error ? (
            <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Debe completar todos los campos</AlertTitle>
          </Alert>
          ) : (
            ''
          )}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
