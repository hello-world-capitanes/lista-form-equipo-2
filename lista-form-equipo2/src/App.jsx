import './App.css'
import Form from './components/Form'
import { useState } from 'react';
import defaultUsers from './assets/DefaultsUsers.json'

function App() {
  const [listaDatos, setListaDatos] = useState(defaultUsers);
  console.log(listaDatos)
  return (
    <>
    <Form listaDatos={listaDatos} setListaDatos={setListaDatos}></Form>
    </>
  )
}

export default App
