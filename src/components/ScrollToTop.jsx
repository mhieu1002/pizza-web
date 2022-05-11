import React from 'react'
import { useEffect, useState } from 'react'

import arrow from "../assets/images/back_to_top.png"

const ScrollToTop = () => {

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 580 ? setBackToTopButton(true) : setBackToTopButton(false);
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  return (
    <div>
      {backToTopButton && (
        <button className="button__scroll" onClick={scrollUp}>
          <img src={arrow} />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop