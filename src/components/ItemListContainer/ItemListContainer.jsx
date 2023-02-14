import { useState, useEffect } from 'react'
import { consultDB } from '../../utils/funciones.js'

export const ItemListContainer = () => {
  const [products, setProd] = useState([])

  useEffect(() => {
    consultDB('/json/product.json').then((prods) => console.log(prods))
  }, [])
  return <></>
}
