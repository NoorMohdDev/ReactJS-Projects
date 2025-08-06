import React, { useEffect, useState } from 'react'
// import { data } from "./data.js"

function ImageSliderV2() {

  const [imagesData, setImagesData] = useState([])
  const [slideCurrent, setSlideCurrent] = useState(0)
  const [loading, setloading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [apiURL, setApiURL] = useState("https://picsum.photos/v2/list?page=1&limit=10")

  useEffect(() => {
    apiURL?fetchImages():null
  }, [apiURL])

  const fetchImages = async () => {
    try {
      setloading(true)
      let data = await fetch(apiURL, {
        method: "GET"
      })
      data = await data.json()
      setImagesData([...data])
      setloading(false)
    } catch (error) {
      setErrorMsg(error)
      console.log(error);
      setloading(false)
    }
  }

  function handleNext() {
    if (slideCurrent >= 0 && slideCurrent < imagesData.length - 1) {
      setSlideCurrent(slideCurrent + 1)
    }
  }

  function handlePrev() {
    if (slideCurrent > 0 && slideCurrent <= imagesData.length - 1) {
      setSlideCurrent(slideCurrent - 1)
    }
  }

  function handleDot(e) {
    setSlideCurrent(Number(e.target.dataset.id))
  }

  return (
    <>
      <h1 className='text-center'>Image Slider</h1>
      {imagesData.length>0?<div className=' w-100 text-lg text-center h-55 border mt-2 p-2'>
        <div className='flex content-center item-center gap-10'>
          <button className={`z-99 cursor-pointer ${slideCurrent === 0 ? "opacity-50" : ""}`} type='button' onClick={handlePrev}>&larr;</button>
          <div className='overflow-hidden'>
            <div style={{ width: '276px' }} className={`flex content-center item-center`}>
              {imagesData.map(data => <img className={`${slideCurrent===Number(data.id)?"block":"hidden"}`} key={data.id} src={data.download_url} data-id={data.id} alt="" />)}
            </div>
          </div>
          <button className={`z-99 cursor-pointer ${slideCurrent === imagesData.length - 1 ? "opacity-50" : ""}`} onClick={handleNext} type='button'>&rarr;</button>
        </div>

        <div>
          {imagesData.map(data => <span onClick={handleDot} className={`cursor-pointer ${slideCurrent===Number(data.id)?"text-blue-400":""}`} data-id={data.id} key={data.id}>&#9673;</span>)}

        </div>
      </div> : <p className='mt-2 p-2 text-center'>{`${loading?"Please wait Loading...":errorMsg}`}</p>}
    </>
  )
}

export default ImageSliderV2