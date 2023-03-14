export const ItemCart = ({ item }) => {
  return (
    <div className='card mb-3 cardCart'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={`./img/${item.image}`} alt={`Imagen de ${item.name}`} className='img-fluid rounded-star' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            <p className='card-text'>Cantidad: {item.cant}</p>
            <p className='card-text'>Precio: {item.price}</p>
            <p className='card-text'>Subtotal: {item.cant * item.price}</p>
            <button className='btn btn-danger' onClick={() => console.log('Producto eliminado')}>
              Eliminar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
