export const Categorys = () => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Button group with nested dropdown"
    >
      <button type="button" className="btn btn-secondary">
        Categorias
      </button>
      <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <div
          className="dropdown-menu"
          aria-labelledby="btnGroupDrop1"
          style={{}}
        >
          <a className="dropdown-item" href="/">
            Hombre
          </a>
          <a className="dropdown-item" href="/">
            Mujeres
          </a>
          <a className="dropdown-item" href="/">
            Niños
          </a>
          <a className="dropdown-item" href="/">
            Accesorios
          </a>
        </div>
      </div>
    </div>
  );
};
