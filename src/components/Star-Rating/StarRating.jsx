import React, { useState } from 'react'

function StarRating() {

  const [currentStars, setCurrentStars] = useState([])
  const [currentStarsActive, setCurrentStarsActive] = useState([])

  const handleMouseOver = (e) => {
    if (!currentStarsActive.includes(Number(e.target.id))) {
      let current = Number(e.target.id)
      let filledStar = Array.from({ length: current + 1 }, () => current--);
      setCurrentStars(filledStar.sort())
    }
  }

  const handleMouseOut = (e) => {
    if (!currentStarsActive.includes(Number(e.target.id))) {
      setCurrentStars([...currentStarsActive])
      setCurrentStarsActive([...currentStarsActive])
    }
  }

  const handleMouseClick = (e) => {
    let current = Number(e.target.id)
    let filledStar = Array.from({ length: current + 1 }, () => current--);
    setCurrentStarsActive(filledStar)
    setCurrentStars(filledStar)
  }

  return (
    <div className='text-3xl text-center'>
      <h1>Star Rating</h1>
      <div className='mt-2 '>
        {[...Array(5)].map((_, index) => <i key={index} id={index} className={`fa-solid cursor-pointer fa-star ${currentStars.includes(index) ? "text-blue-400" : null}`} onMouseOver={(e) => {
          if (e.target.classList.contains("fa-star"))
            handleMouseOver(e)
        }} onMouseOut={(e) => {
          if (e.target.classList.contains("fa-star")) handleMouseOut(e)
        }} onClick={(e) => {
          if (e.target.classList.contains("fa-star")) handleMouseClick(e)
        }}></i>)}
      </div>
    </div>
  )
}

export default StarRating