import movisSlice from "../../../app/slices/movisSlice";
import TarjetaMonto from "./monto/TarjetaMonto"
import { useSelector } from "react-redux";
import './montos.css'

const Montos = () => {

    let ingresos = 0;
    let gastos = 0;

    const movis = useSelector(state => state.movis.movimientos)
    const rubros = useSelector(state => state.movis.rubros)
    const rubrosIngresos = rubros.filter(r => r.tipo === 'ingreso');
    const rubrosGastos = rubros.filter(r => r.tipo === 'gasto');
    
    const movsIngresos = movis?.filter(mov => rubrosIngresos?.map(r => r.nombre)?.includes(mov.rubro));
    if(movsIngresos.length > 0){ 
        // ingresos = movsIngresos?.reduce((a,b) => a.total + b.total);
        movsIngresos.forEach(m => ingresos += m.total);
    }

    const movsGastos = movis?.filter(mov => rubrosGastos?.map(r => r.nombre)?.includes(mov.rubro) && !isNaN(mov.total));
    if(movsGastos.length > 0){ 
        //gastos = movsGastos?.reduce((a, b) => a.total + b.total);    
        movsGastos.forEach(m => gastos += m.total);
    }
    
    return <div className="montos">
        <TarjetaMonto nombre='Ingresos' monto={ingresos}></TarjetaMonto>
        <TarjetaMonto nombre='Gastos' monto={gastos}></TarjetaMonto>
        <TarjetaMonto nombre='Saldo Restante' monto={ingresos - gastos}></TarjetaMonto>
    </div>
}

export default Montos;