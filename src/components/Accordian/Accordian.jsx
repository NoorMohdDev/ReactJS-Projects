import { useState } from "react"
import { data } from "./data.js"
function Accordian({setCollapse}) {
  const [faq, setFAQ] = useState([...data])

  return (
    faq.map(({ question, answer }, index) => (<div className="p-4 overflow-hidden h-10" key={index}
    >
      <div className=" cursor-pointer flex justify-between" onClick={setCollapse} >
        
        <h1>{question}</h1>
       
        <span>+</span></div>
      <div className="pt-3 "><p >{answer}</p></div>
    </div>
    )
    )
  )
}

export default Accordian