import "./App.css";

/* Components */
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer' //importación y ejecucción
import { ItemCount } from './ItemCount/ItemCount'
import { Item } from '../Item/item'

export const App = () => {
  return (
    <div>
      <Navbar company_name={'DPalacio Shop'} />
      <ItemListContainer />
      <ItemCount valInicial={1} stock={10} />
      <Item
        item={{
          id: 5,
          image: 'venom.png',
          name: 'Camisa venom',
          price: 25.0,
          sizes: 'S, M, L, XL',
          brand: 'MARVEL',
        }}
      />
    </div>
  )
}

export default App;
