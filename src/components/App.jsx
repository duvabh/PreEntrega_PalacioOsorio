import "./App.css";

/* Components */
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer"; //importación y ejecucción

export const App = () => {
  return (
    <div>
      <Navbar company_name={"DPalacio Shop"} />
      <ItemListContainer
        greeting={"Esto es un mensaje con styling integrado"}
      />
    </div>
  );
};

export default App;
