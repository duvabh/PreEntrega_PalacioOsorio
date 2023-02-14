export const Item = ({ item }) => {
  return (
    <div>
      <div className='card' style={{ width: '18rem' }}>
        <img src={`./img/${item.image}`} className='card-img-top' alt={`Imagen de ${item.nome}`} />
        <div className='card-body'>
          <h5 className='card-title'>{item.name}</h5>
          <p className='card-text'>${item.price}</p>
          <p className='card-text'>{item.sizes}</p>
          <p className='card-text'>{item.brand}</p>
          <button className='btn btn-secundary'>Ver producto</button>
        </div>
      </div>
    </div>
  )
}
