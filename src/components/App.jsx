import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Components */
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer' //importación y ejecucción
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar company_name={'DPalacio Shop'} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
