import { useState } from 'react'
import Modal from './components/Modal'
import './App.css'
import Form from './components/Form'
import defaultUsers from './assets/DefaultsUsers.json'
import { Select } from './components/SelectorComponent'
import provincias from './assets/provincias.json'

function App() {

  const [show, setShow] = useState(false)
  const [listaDatos, setListaDatos] = useState(defaultUsers);

  const handleModalShow = (boolean) => {
    setShow((prevShow) => prevShow = boolean)
    console.log(show)
  }
 
  return (
    <>
      <Form listaDatos={listaDatos} setListaDatos={setListaDatos}></Form>
      <div>
        <Select data={provincias}/>
      </div>
      <div className='container d-flex'>
      {show ? <Modal handleModalShow={handleModalShow} /> : <div onDoubleClick={() => handleModalShow(true)} className='test'></div>}
    </div>
    </>
    
      
  )
}

export default App
