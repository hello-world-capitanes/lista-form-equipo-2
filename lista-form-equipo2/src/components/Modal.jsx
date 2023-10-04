import React from 'react'
import Title from './Title'

const Modal = ({
    handleModalShow
}) => {

  return (
    <div className='modal_container'>
        <Title title={'Modal'}/>
        <p>Name</p>
        <p>Checked</p>
        <p>Province</p>
        <button onClick={() => handleModalShow(false)}>Close</button>
    </div>
  )
}

export default Modal