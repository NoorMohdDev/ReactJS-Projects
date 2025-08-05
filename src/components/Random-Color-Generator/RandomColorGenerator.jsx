import React, { useState } from 'react'

function RandomColorGenerator() {

  const [color, setColor] = useState()
  const [isRandom, setIsRandom] = useState(false)

  const handleHex = (e) => {
    isRandom?null:setIsRandom(!isRandom)

    const str = "ABCDEF0123456789"
    let newColor = ""
    for (let i = 0; i < 6; i++) {
      const element = str[Math.floor(Math.random() * str.length)];
      newColor += element;
    }
    setColor(`#${newColor}`)
    setBg(e,`#${newColor}`)

  }

  const handleRGB = (e) => {
    isRandom?setIsRandom(!isRandom):null

    const element = [...Array(3)].map( () => Math.floor(Math.random() * 256))
    
    setColor(`rgb(${element[0]},${element[1]},${element[2]})`)
    setBg(e,`rgb(${element[0]},${element[1]},${element[2]})`)

  }

  const setBg = (e,newColor) => {
    let bg = ""
    while (e.target.parentElement.id !== "root") {
      e.target = e.target.parentElement
      bg = e.target
    }
    bg.style.backgroundColor = newColor
    bg.style.width = "100%"
    bg.style.height = "100vh"
  }

  const handleRandom = (e) => {
    setIsRandom(!isRandom)
    if (isRandom) {
      handleHex(e)
    }
    else {
      handleRGB(e)
    }
  }



  return (
    <div className={`text-center ${color?"text-white":"text-black"}`}>
      <h1>Random Color Generator</h1>
      <div className='flex gap-3 mt-2'>
        <button type="button" className=' cursor-pointer bg-green-400 text-white rounded px-2 flex items-center justify-center  py-1' onClick={handleHex}>Create Hex</button>
        <button type="button" className=' cursor-pointer bg-green-400 text-white rounded align-center flex items-center justify-center px-2 py-1' onClick={handleRGB}>Create RGB</button>
        <button type="button" className=' cursor-pointer bg-green-400 text-white rounded align-center px-2 flex items-center justify-center  py-1' onClick={handleRandom}>Generate Random Color</button>
      </div>
      <div>
        <p>{color ? isRandom? "HEX Color": "RGB Color" :"HEX Color"}</p>
        <p>{color ? color : "#7E7196"}</p>
      </div>
    </div>
  )
}

export default RandomColorGenerator