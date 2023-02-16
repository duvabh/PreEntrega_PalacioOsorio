import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
  return (
    <div className='card mb-3 cardProduct border-ligth'>
      <img src={`/img/${item.image}`} className='card-img-top' alt={`Imagen de ${item.nome}`} />
      <div className='card-body cardBody'>
        <h5 className='card-title'>{item.name}</h5>
        <p className='card-text'>${item.price}</p>
        <p className='card-text'>{item.sizes}</p>
        <p className='card-text'>{item.brand}</p>
        <Link className='nav-link' to={`/item/${item.id}`}>
          <button className='btn btn-secundary btnCart'>Ver producto</button>
        </Link>
      </div>
    </div>
  )
}
