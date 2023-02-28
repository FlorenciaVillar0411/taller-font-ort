import movisSlice from "../../../app/slices/movisSlice";
import TarjetaMonto from "./monto/TarjetaMonto"
import { useSelector } from "react-redux";

const Montos = () => {

    let ingresos = 0;
    let gastos = 0;

    const movis = useSelector(state => state.movis.movimientos)
    const rubros = useSelector(state => state.movis.rubros)
    const rubrosGastos = rubros.filter(r => r.tipo === 'gasto');
    const rubrosIngresos = rubros.filter(r => r.tipo === 'ingreso');
    
    const movsIngresos = movis?.filter(mov => rubrosIngresos?.map(r => r.nombre)?.includes(mov.rubro));
    if(movsIngresos.length > 0){ 
    ingresos = movsIngresos?.reduce((a,b) => a.total + b.total);
    }

    const movsGastos = movis?.filter(mov => rubrosGastos?.map(r => r.nombre)?.includes(mov.rubro));
    if(movsGastos.length > 0){ 
    gastos = movsGastos?.reduce((a,b) => a.total + b.total);    
    }
    
    return <div>
        <TarjetaMonto monto={ingresos}></TarjetaMonto>
        <TarjetaMonto monto={gastos}></TarjetaMonto>
        {/* <TarjetaMonto monto={ingreso}></TarjetaMonto> */}
    </div>
}

export default Montos;