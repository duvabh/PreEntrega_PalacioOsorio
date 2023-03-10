import { useState, useEffect } from 'react'
import { consultDB } from '../../utils/funciones'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useLigthModeContext } from '../../context/LightModeContext'

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    consultDB('/json/product.json').then((prods) => {
      const prod = prods.find((item) => item.id === parseInt(id))
      setProducto(prod)
    })
  }, [id])

  const { ligthMode } = useLigthModeContext()
  return (
    <div className={`card mb-3 container ${ligthMode ? 'itemDetailLight' : 'itemDetail'}`}>
      <ItemDetail prod={producto} />
    </div>
  )
}
