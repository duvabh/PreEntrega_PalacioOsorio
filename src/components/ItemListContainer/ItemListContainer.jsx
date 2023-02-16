import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { consultDB } from '../../utils/funciones.js'

import { ItemList } from '../ItemList/ItemList.jsx'

export const ItemListContainer = () => {
  const { idCategory } = useParams()
  const [products, setProducts] = useState([])
  console.log(idCategory)

  useEffect(() => {
    if (idCategory) {
      consultDB('../json/product.json').then((prod) => {
        const prods = prod.filter((prod) => prod.idCategory === idCategory)
        const items = ItemList({ prods })
        setProducts(items)
      })
    } else {
      consultDB('/json/product.json').then((prods) => {
        const items = ItemList({ prods })
        setProducts(items)
      })
    }
  }, [idCategory])
  return <div className='row cardProducts'>{products}</div>
}
 