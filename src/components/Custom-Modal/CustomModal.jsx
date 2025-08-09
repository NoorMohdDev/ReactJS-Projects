import React, { useState } from 'react'
import Modal from './Modal.jsx'
import Button from './Button.jsx'

function CustomModal() {

    const [showCloseModal, setShowCloseModal] = useState(false)

    const handleModal = (value) =>{
        setShowCloseModal(value)
    }

  return (
    <div className='flex pt-4 flex-col gap-5 items-center justify-center relative'>
        <h1>Custom Modal</h1>
        <Button click={handleModal} text="Open"/>
        {showCloseModal?<Modal click={handleModal}/>:null}
    </div>
  )
}

export default CustomModal