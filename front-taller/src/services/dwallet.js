import axios from 'axios';

const BASE_URL = 'https://dwallet.develotion.com';

const login = async (user, pass) => {
  const res = await fetch(`${BASE_URL}/login.php`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      usuario: user,
      password: pass,
    }),
  });

  return manejarRespuesta(res);
};

const registro = async (user, pass, depto, ciudad) => {
  const res = await fetch(`${BASE_URL}/registro.php`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      usuario: user,
      password: pass,
      idDepartamento: depto,
      idCiudad: ciudad,
    }),
  });
  return manejarRespuesta(res);
};

const postRegistro = async (user, pass, depto, ciudad) => {
  const headers = getHeaders('');
  const {data} = await axios.post(`${BASE_URL}/usuarios.php`, {
    usuario: user,
    password: pass,
    idDepartamento: depto,
    idCiudad: ciudad,
  }, { headers });
  return data;
};

const getCiudades = async (idDepto = '') => {
  const res = await axios.get(
    `${BASE_URL}/ciudades.php${idDepto ? '?idDepartamento=' + idDepto : ''}`
  );
  return res.data.ciudades;
};

const getDeptos = async () => {
  const res = await axios.get(`${BASE_URL}/departamentos.php`);
  return res.data.departamentos;
};

const getMovimientos = async (idUsuario, token) => {
  const headers = getHeaders(token);
  const res = await axios.get(
    `${BASE_URL}/movimientos.php?idUsuario=${idUsuario}`,
    { headers }
  );
  return res.data.movimientos;
};

const postMovimiento = async (movimiento, token) => {
  const headers = getHeaders(token);
  const res = await axios.post(
    `${BASE_URL}/movimientos.php?idUsuario=${movimiento.idUsuario}`,
    movimiento,
    { headers }
  );
  return res.data;
};

const getRubros = async (token) => {
  const headers = getHeaders(token);
  const res = await axios.get(`${BASE_URL}/rubros.php`, { headers });
  return res.data.rubros;
};

const getHeaders = (token) => {
  return {
    'Content-Type': 'application/json',
    apikey: token,
  };
};

const manejarRespuesta = (res) => {
  if (res.status == 200) {
    return res.json();
  } else {
    return Promise.reject({
      status: res.status,
      message: 'Ha ocurrido un error',
    });
  }
};

export {
  login,
  registro,
  getCiudades,
  getDeptos,
  getMovimientos,
  postMovimiento,
  getRubros,
  postRegistro
};
