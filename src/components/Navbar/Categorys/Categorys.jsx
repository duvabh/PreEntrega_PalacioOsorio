import { Link } from 'react-router-dom'

export const Categorys = () => {
  return (
    <div className='btn-group' role='group' aria-label='Button group with nested dropdown'>
      <button type='button' className='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown'>
        Categorias
      </button>
      <div className='dropdown-menu' aria-labelledby='btnGroupDrop1'>
        <Link className='dropdown-item' to={`/category/batman`}>
          Batman
        </Link>
        <Link className='dropdown-item' to={'/category/ironman'}>
          Iroman
        </Link>
        <Link className='dropdown-item' to={'/category/spiderman'}>
          Spiderman
        </Link>
      </div>
    </div>
  )
}
