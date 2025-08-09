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
      <h1 className={`text-center ${theme==="light"?"text-black":"text-white"}`} >Light Dark Mode</h1>
      <button onClick={handelToggleTheme} className={`border rounded ${theme==="light"?"text-white bg-black":"text-black bg-white"} px-1 p m-2`} type="button">Change Theme</button>
    </div>
  )
}

export default LightDarkMode