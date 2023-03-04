import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Checkout = () => {
  let navigate = useNavigate()
  const dateForm = useRef()
  const consultForm = (e) => {
    e.preventDefault()
    console.log(dateForm.current)
    const data = new FormData(dateForm.current)
    console.log(data)
    const client = Object.fromEntries(data)
    console.log(client)
    e.target.reset()
    toast.success('Compra realizada con exito')
    navigate('/')
  }

  return (
    <div className='container contForm'>
      <form onSubmit={consultForm} ref={dateForm}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Nombre y Apellido
          </label>
          <input type='text' className='form-control' name='name' />
        </div>
        <div className='mb-3'>
          <label htmlFor='document' className='form-label'>
            Documento
          </label>
          <input type='number' className='form-control' name='document' />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' name='email' />
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='form-label'>
            Telefono
          </label>
          <input type='number' className='form-control' name='phone' />
        </div>
        <div className='mb-3'>
          <label htmlFor='address' className='form-label'>
            Direccion
          </label>
          <input type='text' className='form-control' name='address' />
        </div>
        <button type='submit' className='btn btn-secondary'>
          Finalizar compra
        </button>
      </form>
    </div>
  )
}
