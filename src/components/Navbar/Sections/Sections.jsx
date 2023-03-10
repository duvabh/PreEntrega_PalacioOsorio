import { Link } from 'react-router-dom'

import { useLigthModeContext } from '../../../context/LightModeContext'

export const Sections = () => {
  const { ligthMode } = useLigthModeContext()
  return (
    <>
      <li className='nav-item'>
        <Link className='nav-item' to={'/'}>
          <button type='button' className={`btn ${ligthMode ? 'btn-light' : 'btn-secondary'}`}>
            Inicio
          </button>
        </Link>
      </li>
      <li className='nav-item'>
        <button type='button' className={`btn ${ligthMode ? 'btn-light' : 'btn-secondary'}`}>
          Lo + nuevo
        </button>
      </li>
      <li className='nav-item'>
        <button type='button' className={`btn ${ligthMode ? 'btn-light' : 'btn-secondary'}`}>
          Promociones
        </button>
      </li>
    </>
  )
}
