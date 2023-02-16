export const Item = ({ item }) => {
  return (
    <div className='card mb-3 cardProduct border-ligth'>
      <img src={`/img/${item.image}`} className='card-img-top' alt={`Imagen de ${item.nome}`} />
      <div className='card-body cardBody'>
        <h5 className='card-title'>{item.name}</h5>
        <p className='card-text'>${item.price}</p>
        <p className='card-text'>{item.sizes}</p>
        <p className='card-text'>{item.brand}</p>
        <button className='btn btn-secundary btnCart'>Ver producto</button>
      </div>
    </div>
  )
}
