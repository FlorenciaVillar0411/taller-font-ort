import BarChartMovs from "../../../../utils/charts/BarChart/BarChart";
import {useSelector } from 'react-redux';
import { Heading } from "@chakra-ui/react";


const IngresoPorRubro = (props) => {
    const movis = useSelector((state) => state.movis.movimientos);
    const rubros = useSelector((state) => state.movis.rubros);
    let data =[];
    rubros?.forEach(r => {
        if(r.tipo === 'ingreso'){
            let sumMonto = 0;
            console.log(movis)
            movis?.forEach(m => {
                if(m.categoria === r.id){
                    sumMonto += m.total;
                }});
            data.push({name: r.nombre, monto: sumMonto})
        }
    });

  return (
    <div className='ingresoPorRubro'>
        <Heading>Ingresos Por Rubro</Heading>
        <BarChartMovs data={data}></BarChartMovs>
    </div>
  );
};

export default IngresoPorRubro;
