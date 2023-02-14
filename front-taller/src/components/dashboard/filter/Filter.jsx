import { useRef } from 'react' 

const MovimientosFilter = ({ onFilter}) => {
    const selectRef = useRef ()


const onChangeSelect = () => {
    onFilter(String(selectRef.current.value))
}

return(
    <>
        <div>
            <select
                onChange={onChangeSelect}
                ref={selectRef}
            >
                <option value={"todos"}>Todos</option>
                <option value={"ingresos"}>Ingresos</option>
                <option value={"gastos"}>Gastos</option>
            </select>
        </div>
    </>
)
}

export default MovimientosFilter;