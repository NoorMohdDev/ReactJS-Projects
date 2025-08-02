import Accordian from "./components/Accordian/Accordian.jsx"

function App() {
  const setCollapse = (e) => {

    e.target.parentElement.parentElement.parentElement.childNodes.forEach(element => {
     if (!element.classList.contains("overflow-hidden", "h-10"))
      element.classList.add("overflow-hidden", "h-10")
    })

    if (e.target.parentElement.parentElement.classList.contains("overflow-hidden", "h-10")) {
      e.target.parentElement.parentElement.classList.remove("overflow-hidden", "h-10")
    } else e.target.parentElement.parentElement.classList.add("overflow-hidden", "h-10")

  }
  return (
    <div className="p-4 box-border">
      <Accordian setCollapse={setCollapse} />
    </div>
  )
}

export default App
