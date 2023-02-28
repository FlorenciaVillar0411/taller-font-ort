import './Registry.css';
import { getCiudades, getDeptos, postRegistro, registro } from '../../services/dwallet';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setDeptos, setCiudades } from '../../app/slices/userSlice';

import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Text,
  Heading,
  Input,
  Button,
  Link,
  Select,
} from '@chakra-ui/react';

const Registry = () => {
  const deptos = useSelector((state) => state.user.deptos);
  const ciudades = useSelector((state) => state.user.ciudades);
  const navigator = useNavigate();
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const inputDepto = useRef();
  const inputCiudad = useRef();
  const inputUser = useRef();
  const inputPass2 = useRef();
  const inputPass = useRef();

  useEffect(() => {
    const getDeptosRegistro = async () => {
      const arr = [];
      const deptos = await getDeptos();
      deptos.map((x) => {
        return arr.push(x);
      });
      dispatch(setDeptos(arr));
    };
    getDeptosRegistro();
  }, []);

  const getCiudadesRegistro = async (evento) => {
    console.log();
    const deptoId = inputDepto.current.value;
    const arr = [];
    const deptos = await getCiudades(deptoId);
    deptos.map((x) => {
      return arr.push(x);
    });
    dispatch(setCiudades(arr));
  };
  const onSignInclick = async () => {
    const userName = inputUser.current.value;
    const password = inputPass.current.value;
    const password2 = inputPass2.current.value;
    const depto = inputDepto.current.value;
    const ciudad = inputCiudad.current.value;

    const mostrarError = () => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4500);
    };

    if (userName && password && ciudad && depto && password === password2) {
      console.log(userName, password, +depto, +ciudad);
      await postRegistro(userName, password, +depto, +ciudad);
      navigator('/login');
    } else {
      mostrarError();
    }
  };

  return (
    <div className="registry">
      <Card class="card">
        <CardHeader class="heading">
          <Heading>Register</Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <br />
            <Input type="text" placeholder="Username" ref={inputUser} />
            <br />
            <Input
              type="password"
              placeholder="Enter password"
              ref={inputPass}
            />
            <br />
            <Input
              type="password"
              placeholder="Re-enter password"
              ref={inputPass2}
            />
            <br />
            <Select
              placeholder="Select depto"
              ref={inputDepto}
              onChange={(ev) => getCiudadesRegistro(ev)}
            >
              {deptos.map((item, index) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
            <br />
            <Select placeholder="Select ciudad" ref={inputCiudad}>
              {ciudades.map((item, index) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
            <br />
            <Text>
              Already registered?{' '}
              <Link color="teal.500" href="/login">
                Log In
              </Link>
            </Text>
            <br />
            <Button type="submit" onClick={onSignInclick}>
              Submit
            </Button>
            {error ? <p className="error"> Se ha producido un error</p> : ''}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default Registry;
