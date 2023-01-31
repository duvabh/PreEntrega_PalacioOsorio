//Importar componentes
import { ButtonCar } from "../CartWidget/CartWidget";
import { Categorys } from "./Categorys/Categorys";
import { Sections } from "./Sections/Sections";
export const Navbar = ({ company_name }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {company_name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Sections />
            <Categorys />
          </ul>
          <ButtonCar countCar={5} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
