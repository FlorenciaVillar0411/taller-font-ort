import {useSelector } from 'react-redux';
import { Heading, Select } from "@chakra-ui/react";
import { useRef, useState } from 'react';


const Comparativo = (props) => {

    const movis = useSelector((state) => state.movis.movimientos);
    const rubros = useSelector((state) => state.movis.rubros);
    const inputRubro = useRef();
    const [info, setRubro] = useState({rubro: 'rubro', pesos: '0000', diferencia: 'mas'});

    const calculateRubro = () => {
        const movsRubro = movis.filter(m => m.rubro === inputRubro.current.value);
        const max = movsRubro?.reduce(function (a, b) { return a.fecha > b.fecha ? a : b; });
        const penMax = movsRubro?.filter(m => m.id !== max.id).reduce(function (a, b) { return a > b ? a : b; });
        console.log(movsRubro, max, penMax)
        setRubro({rubro: inputRubro.current.value, pesos: Math.abs(max.total - penMax.total), diferencia: (max.total > penMax.total) ? 'mas' : (max.total < penMax.total )? 'menor' : 'igual'})
    }

  return (
    <div className='comparativo'>
        <Heading>Gastos Por Rubro</Heading>
        <Select onChange={calculateRubro} ref={inputRubro}>{rubros?.map((item, index) => {
                return (
                  <option key={item.id} value={item.nombre}>
                    {item.nombre}
                  </option>
                );
              })}</Select>
        <p>Para el rubro <strong>{info.rubro}</strong>, en la
última compra has gastado <strong>${info.pesos}</strong> pesos <strong>{info.diferencia}</strong> que en la
penúltima</p>
    </div>
  );
};

export default Comparativo;
