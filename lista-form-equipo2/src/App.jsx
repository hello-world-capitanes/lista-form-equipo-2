import { useState } from 'react'
import Modal from './components/Modal'
import './App.css'

function App() {

  const [show, setShow] = useState(false)

  const handleModalShow = (boolean) => {
    setShow((prevShow) => prevShow = boolean)
    console.log(show)
  }

  return (
    <div className='container d-flex'>
      {show ? <Modal handleModalShow={handleModalShow} /> : <div onDoubleClick={() => handleModalShow(true)} className='test'></div>}
    </div>
  )
}

export default App
