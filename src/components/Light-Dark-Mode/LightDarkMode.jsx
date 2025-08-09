import React from 'react'
import useLocalStorage from './useLocalStorage.jsx'

function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme","dark")

  function handelToggleTheme(e) {
    e.target.parentElement.parentElement.parentElement.classList.toggle("bg-black")
    setTheme(theme==="light"?"dark":"light")
  }
  return (
    <div className='p-2'>
      <h1 className={`text-center ${theme==="light"?"text-white":"text-black"}`} >Light Dark Mode</h1>
      <button onClick={handelToggleTheme} className={`border rounded ${theme==="light"?"text-black bg-white":"text-white bg-black"} px-1 p m-2`} type="button">Change Theme</button>
    </div>
  )
}

export default LightDarkMode