import React from 'react'
import Button from './Button.jsx'

function Modal({click}) {
  return (
    <div className='animate-(--animate-popup) p-4 text-center top-30 rounded w-1/2 h-80 absolute bg-cyan-500 text-white'>
        <h1 className='p-4 text-lg'>Modal</h1>
        <Button click={click} text="Close"/>

    </div>
  )
}

export default Modal