import './App.css'
import Form from './components/Form'
import { useState } from 'react';
import defaultUsers from './assets/DefaultsUsers.json'
import { Select } from './components/SelectorComponent'
import provincias from './assets/provincias.json'

function App() {
  const [listaDatos, setListaDatos] = useState(defaultUsers);
  console.log(listaDatos)
  return (
    <>
    <Form listaDatos={listaDatos} setListaDatos={setListaDatos}></Form>
    <Select data={provincias}/>
    </>
  )
}

export default App
