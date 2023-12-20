import React from 'react'
import "./header.css"

const Header = ({isGame}) => {
  return (
    <div className='header__container'>
          <h1 className='header__container-title'>
            {isGame ? "Flip" : "History"}
          </h1>
      </div>
  )
}

export default Header