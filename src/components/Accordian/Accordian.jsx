import { data } from "./data.js"
import { useState } from "react"
function Accordian() {
  const [collapesed, setCollapesed] = useState(false)


  return (
    data.map(({ question, answer }, index) => (<div className={ 
      `p-4 transition-[height] ${collapesed ? "" : "overflow-hidden h-10"}`
    } key={index}
    >
      <div onClick={()=>{setCollapesed(!collapesed)}} className=" cursor-pointer flex justify-between"><h1>{question}</h1>
        <span>+</span></div>
      <div className="pt-3 "><p >{answer}</p></div>
    </div>))
  )
}

export default Accordian