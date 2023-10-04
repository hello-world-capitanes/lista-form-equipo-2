import { useState } from 'react'
import Modal from './components/Modal'
import './App.css'
import Form from './components/Form'
import defaultUsers from './assets/DefaultsUsers.json'
import { Select } from './components/SelectorComponent'
import provincias from './assets/provincias.json'
import Lista from './components/Lista/Lista'

function App() {

  const [show, setShow] = useState(false)
  const [listaDatos, setListaDatos] = useState(defaultUsers);
  const [id, setId] = useState();

  const handleModalShow = (boolean, id) => {
    setShow((prevShow) => prevShow = boolean)
    setId(id)
  }
  
 
  return (
    <>
      <Form listaDatos={listaDatos} setListaDatos={setListaDatos}></Form>
      <div>
        <Select data={provincias}/>
      </div>
      {show ? 
      <Modal listaDatos={listaDatos} id={id} handleModalShow={handleModalShow} /> :
      <Lista 
          listaDatos={listaDatos} 
          setListaDatos={setListaDatos}
          handleModalShow={handleModalShow}>
      </Lista>
      }
    </>
    
      
  )
}

export default App
