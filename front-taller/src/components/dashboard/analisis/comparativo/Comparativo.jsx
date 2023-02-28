import {useSelector } from 'react-redux';
import { Heading } from "@chakra-ui/react";
import LineChartMovs from "../../../../utils/charts/lineChart/LineChart";


const Comparativo = (props) => {
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    const movis = useSelector((state) => state.movis.movimientos);
    const rubrosGasto = useSelector((state) => state.movis.rubros).filter(r => r.tipo === 'gasto');
    const today = new Date();
    const date = new Date((today.getFullYear() - 2), 0, 1);
    let data = [];
    while(date < today){
        let montoMes = 0;
        movis.forEach(m => {
            if(rubrosGasto.find(r => r.nombre === m.rubro 
                && new Date(m.fecha).getMonth() === date.getMonth() 
                && date.getFullYear() === new Date(m.fecha).getFullYear())){
                montoMes += m.total;
            }
        });
        data.push({mes: `${meses[date.getMonth()]} / ${date.getFullYear()}`, monto: montoMes});
        date.setMonth( date.getMonth() + 1);
    }

  return (
    <div className='comparativo'>
        <Heading>Gastos Por Rubro</Heading>
        <LineChartMovs data={data}></LineChartMovs>
    </div>
  );
};

export default Comparativo;
