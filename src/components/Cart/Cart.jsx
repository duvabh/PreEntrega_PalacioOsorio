import { Link } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'

export const Cart = () => {
  const carrito = [
    {
      id: 1,
      idCategory: 1,
      image: '/batman.png',
      cant: 3,
      name: 'Camisa batman',
      price: 25000,
      sizes: 'S, M, L, XL',
      brand: 'DC comic',
      stock: 5,
    },
    {
      id: 1,
      idCategory: 1,
      image: '/batman.png',
      cant: 5,
      name: 'Camisa batman',
      price: 25000,
      sizes: 'S, M, L, XL',
      brand: 'DC comic',
      stock: 5,
    },
    {
      id: 1,
      idCategory: 1,
      image: '/batman.png',
      cant: 7,
      name: 'Camisa batman',
      price: 25000,
      sizes: 'S, M, L, XL',
      brand: 'DC comic',
      stock: 5,
    },
  ]

  return (
    <>
      {carrito.length === 0 ? (
        //Sino existen productos en el carrito
        <>
          <h2>Carrito vacio</h2>
          <Link className='nav-link' to={'/'}>
            <button className='btn btn-secondary'>Continuar comprando</button>
          </Link>
        </>
      ) : (
        //Si existen productos en el carrito
        <div className='container cartContainer'>
          <ItemList prods={carrito} plantilla='ItemCart' />
          <div className='divButtons'>
            <p>Resumen de la compra: Precio total</p>
            <button className='btn btn-danger' onClick={() => console.log('Productos Eliminados')}>
              Vacias carrito
            </button>
            <Link className='nav-link' to={'/'}>
              <button className='btn btn-secondary'>Continuar comprando</button>
            </Link>
            <Link className='nav-link' to={'/checkout'}>
              <button className='btn btn-secondary'>Finalizar compra</button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
