import MovimientosRow from './movimientosRow/MovimientosRow'
import './movimientosRow/MovimientosRow'

const MovimientosTable = ({ movs }) => {
  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Movimiento</th>
            <th scope='col'>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {movs?.map(({ id, description }) => (
            <MovimientosRow
              movId={id}
              movDescription={description}
              key={id}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
export default MovimientosTable