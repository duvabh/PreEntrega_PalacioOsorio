import { Link } from 'react-router-dom'
import { useLigthModeContext } from '../../context/LightModeContext'

export const Item = ({ item }) => {
  const { ligthMode } = useLigthModeContext()

  return (
    <div className={`card mb-3 cardProduct ${ligthMode ? 'border-light' : 'border-dark'} `}>
      <img src={`/img/${item.image}`} className='card-img-top' alt={`Imagen de ${item.name}`} />
      <div className={`card-body ${ligthMode ? `cardBodyLight` : `cardBody`}`}>
        <h5 className='card-title'>{item.name}</h5>
        <p className='card-text'>${item.price}</p>
        <p className='card-text'>{item.sizes}</p>
        <p className='card-text'>{item.brand}</p>
        <Link className='nav-link' to={`/item/${item.id}`}>
          <button className={`btn ${ligthMode ? 'btn-light' : 'btn-secundary'} btnCart`}>Ver producto</button>
        </Link>
      </div>
    </div>
  )
}
