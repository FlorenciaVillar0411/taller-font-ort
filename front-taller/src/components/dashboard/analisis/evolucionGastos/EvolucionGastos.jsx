import {useSelector } from 'react-redux';
import { CardHeader, Heading } from "@chakra-ui/react";



const EvolucionGastos = (props) => {

    const movis = useSelector((state) => state.movis.movimientos);
    const rubrosGasto = useSelector((state) => state.movis.rubros).filter(r => r.tipo === 'gasto');
    const today = new Date();
    const date = new Date((today.getFullYear() - 2), 0, 1);
    let data = [];


  return (
    <div className='evolucionGastos'>
        <Heading>Evolucion de gastos</Heading>
        <Card><p>Para el rubro <strong>{rubroSeleccionado}</strong>, en la
última compra has gastado <strong>${diferencia}</strong> pesos {comparacion} que en la
penúltima”</p></Card>
    </div>
  );
};

export default EvolucionGastos;
