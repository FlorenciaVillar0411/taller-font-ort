import { filter } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilteredMovimientos, setMovimientos } from '../../../../app/slices/movisSlice';


const Filter = () => {
    const filterValue = useRef();
    const movis = useSelector((state) => state.movis.movimientos);
    const dispatch = useDispatch();

    const onChangeSelect = () => {
        const value = filterValue.current.value;
        let filtered = movis;
        if( value === 'gasto'){
            filtered = movis.filter(m => m.categoria < 7);
        } else if (value === 'ingreso'){
            filtered = movis.filter(m => m.categoria >= 7);
        }
        dispatch(setFilteredMovimientos(filtered));
    }

    return(
        <>
            <div>
                <select
                    onChange={onChangeSelect}
                    ref={filterValue}
                >
                    <option value={"todos"}>Todos</option>
                    <option value={"ingreso"}>Ingresos</option>
                    <option value={"gasto"}>Gastos</option>
                </select>
            </div>
        </>
    )
}

export default Filter;