import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ prod }) => {
  const onAdd = (quantity) => {
    console.log(quantity)
    console.log(prod)
  }

  return (
    <div className='row g-0 itemDetailProd'>
      <div className='col-md-4'>
        <img src={`/img/${prod.image}`} className='img-fluid rounded-start' alt={`Imagen de ${prod.nome}`} />
      </div>
      <div className='col-md-8'>
        <div className='card-body'>
          <h5 className='card-title'>{prod.name}</h5>
          <p className='card-text'>Precio: ${prod.price}</p>
          <p className='card-text'>Tallas: {prod.sizes}</p>
          <p className='card-text'>Marca: {prod.brand}</p>
          <p className='card-text'>Stock: {prod.stock}</p>
          <p className='card-text'>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </p>
          <ItemCount valInicial={1} stock={prod.stock} onAdd={onAdd} />
          <Link className='nav-link' to={'/cart'}>
            <button type='button' className='btn btn-secondary'>
              Finalizar compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
