const BASE_URL = 'https://dwallet.develotion.com/';

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
            password:pass,
            idDepartamento:depto,
            idCiudad: ciudad
        }),
    });
    return manejarRespuesta(res);
};

const getCiudades = async (idDepto = "") => {
    const res = await axios.get(`${BASE_URL}/ciudades.php${idDepto ? "?idDepartamento=" + idDepto : ""}`);
    return manejarRespuesta(res);
};

const getDeptos = async () => {
    const res = await axios.get(`${BASE_URL}/departamentos.php`);
    return manejarRespuesta(res);
};

const getMovimientos = async (idUsuario, token) => {
    const headers = getHeaders(token);
    const res = await axios.get(`${BASE_URL}/movimientos.php?idUsuario=${idUsuario}`, {headers} )
    return manejarRespuesta(res);
};

const postMovimiento = async (movimiento, token) => {
    const headers = getHeaders(token);
    const res = await axios.post(`${BASE_URL}/movimientos.php?idUsuario=${movimiento.idUsuario}`, movimiento, { headers })
    return manejarRespuesta(res);
}

const getRubros = async (token) => {
    const headers = getHeaders(token);
    const res = await axios.get(`${BASE_URL}/rubros.php`, {headers} )
    return manejarRespuesta(res);
};

const getHeaders = (token) => {
    return {
        'Content-Type': 'application/json',
        'apikey': token
    };
}

const manejarRespuesta = (res) => {
    if(res.status == 200){
        return res.json();
      } else {
        return Promise.reject({
            status: res.status,
            message: "Ha ocurrido un error"
        });
      }
}