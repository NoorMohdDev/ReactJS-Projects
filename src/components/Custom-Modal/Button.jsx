import React from 'react'

function Button({text,click}) {
  return (
    <button onClick={()=>{
      text==="Open"?click(true):click(false)
    }} className='cursor-pointer pb-1 px-2 rounded bg-black text-white' type='button'>{text}</button>
  )
}

export default Button