import { Link } from 'react-router-dom'

export const Sections = () => {
  return (
    <>
      <li className='nav-item'>
        <Link className='nav-item' to={'/'}>
          <button type='button' className='btn btn-secondary'>
            Inicio
          </button>
        </Link>
      </li>
      <li className='nav-item'>
        <button type='button' className='btn btn-secondary'>
          Lo + nuevo
        </button>
      </li>
      <li className='nav-item'>
        <button type='button' className='btn btn-secondary'>
          Promociones
        </button>
      </li>
    </>
  )
}
