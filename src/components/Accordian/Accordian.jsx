import { useState } from "react"
import { data } from "./data.js"
function Accordian() {
  const [isSelectMultiple, isSetSelectMultiple] = useState(false)
  const [selectMultiple, setSelectMultiple] = useState([])
  const [currentAccordianId, setCurrentAccordianId] = useState(null)

  const handleSingle = (id) => {
    setCurrentAccordianId(currentAccordianId === id ? null : id)
  }

  const handleMultiple = (id) => {
    if (isSelectMultiple === false) {
      setSelectMultiple([])
    }

    setSelectMultiple(selectMultiple.includes(id) ? [...selectMultiple.filter((selectedItem) => selectedItem !== id)] : [...selectMultiple, id])

  }

  return (<>
    <label className="pl-4" htmlFor="multiple">Enable Multiple</label>
    <input id="multiple" className="ml-4" type="checkbox" onClick={() => {
      isSetSelectMultiple(!isSelectMultiple)
    }} />
    
    {data.map(({ question, answer, id }) => (
      <div className="cursor-pointer overflow-hidden  text-white mt-2 w-100 bg-blue-400 rounded-md " id={id} key={id}>

        <div className="flex justify-between item-center p-2" onClick={() => {
          isSelectMultiple ? handleMultiple(id) :
            handleSingle(id)
        }} >

          <h1>{question}</h1>
          <span>+</span>

        </div>

        {isSelectMultiple ? selectMultiple?.map(item => (

          isSelectMultiple && item === id ? <div key={item} className="p-3 mt-2 bg-blue-500 ">
            <p >{answer}</p>
          </div> : null
        ))

          : currentAccordianId === id ?
            <div className="p-3 mt-2 bg-blue-500 ">
              <p >{answer}</p>
            </div> : null

        }
      </div>
    )
    )}
  </>
  )
}

export default Accordian