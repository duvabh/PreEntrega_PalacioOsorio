import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ prod }) => {
  return (
    <div className='row g-0 itemDetailProd'>
      <div className='col-md-4'>
        <img src={`/img/${prod.image}`} className='img-fluid rounded-start' alt='...' />
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
          <ItemCount valInicial={1} stock={prod.stock} />
          <button type='button' className='btn btn-secondary'>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
