import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Select } from './components/SelectorComponent'
import provincias from './assets/provincias.json'
import defaultUsers from './assets/DefaultsUsers.json'

function App() {
  const [listaDatos, setListaDatos] = useState([...defaultUsers])

  return (
    
      <div>
        <Select data={provincias} listaDatos={listaDatos} setListaDatos={setListaDatos}/>
        </div>
  )
}

export default App
