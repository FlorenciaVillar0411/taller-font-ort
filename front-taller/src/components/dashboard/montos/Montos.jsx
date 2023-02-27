import movisSlice from "../../../app/slices/movisSlice";
import TarjetaMonto from "./monto/TarjetaMonto"

const Montos = () => {
    const ingreso = 2134;
    
    return <div>
        <TarjetaMonto monto={ingreso}></TarjetaMonto>
        <TarjetaMonto monto={ingreso}></TarjetaMonto>
        <TarjetaMonto monto={ingreso}></TarjetaMonto>
    </div>
}