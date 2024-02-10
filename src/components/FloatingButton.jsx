import React from 'react'
import X from "../assets/download.png"

const FloatingButton = () => {
  return (
    <button className="absolute bottom-5 right-5 bg-violet-500 z-20"><img src={X} alt="" />Need Help?</button>
  )
}

export default FloatingButton