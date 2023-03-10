import { useContext, createContext, useState } from 'react'

const LigthModeContext = createContext() //Se crea para dar contexto a la app

export const useLigthModeContext = () => useContext(LigthModeContext)

//Es el proveedor del contexto en los modulos a utilizar
export const LigthModeProvider = (props) => {
  const [ligthMode, setLigthMode] = useState(false) //Se utiliza un booleano para definir el estado del darkmode (False=apago, true=encendido)

  const toggleLigthMode = () => {
    setLigthMode(!ligthMode) //Si darkMode es true se pasa a false y viceversa
    if (!ligthMode) {
      document.body.firstElementChild.classList.add('ligthMode')
    } else {
      document.body.firstElementChild.classList.remove('ligthMode')
    }
  }

  return <LigthModeContext.Provider value={{ ligthMode, toggleLigthMode }}>{props.children}</LigthModeContext.Provider>
}
