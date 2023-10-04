import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Select } from './components/SelectorComponent'
import provincias from './assets/provincias.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Select data={provincias}/>
        </div>
  )
}

export default App
