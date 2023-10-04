import { useState } from 'react'
import './App.css'
import Lista from './components/Lista/Lista'

function App() {
  const [count, setCount] = useState(0)

  const [listaDatos, setListaDatos] = useState([
    {
        "Nombre": "Objeto 1",
        "Acepta": true,
        "Provincia": "Madrid"
      },
      {
        "Nombre": "Objeto 2",
        "Acepta": false,
        "Provincia": "Barcelona"
      },
      {
        "Nombre": "Objeto 3",
        "Acepta": true,
        "Provincia": "Valencia"
      }
])
  return (
    <>
      <Lista listaDatos={listaDatos} setListaDatos={setListaDatos}></Lista>
    </>
  )
}

export default App
