import './botonLigthMode.css'
import { useLigthModeContext } from '../../../context/LightModeContext'

export const BotonLigthMode = () => {
  const { toggleLigthMode } = useLigthModeContext()
  return (
    <div className='form-check form-switch'>
      <input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' defaultChecked onInput={() => toggleLigthMode()} />
      <label className='form-check-label' htmlFor='flexSwitchCheckChecked'></label>
    </div>
  )
}
