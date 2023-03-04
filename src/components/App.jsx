import "./App.css";
import 'react-toastify/dist/ReactToastify.css'

//React routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Toastify(alerta de carga)
import { ToastContainer } from 'react-toastify'

/* Components */
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer' //importación y ejecucción
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { Checkout } from './Checkout/Checkout'
import { Cart } from '../Cart/Cart'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar company_name={'DPalacio Shop'} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App;
