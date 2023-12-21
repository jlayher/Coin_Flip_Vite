import React from 'react'
import "./logbody.css"

const LogBody = ({isGame, setIsGame}) => {
  return (
    <div className='logbody__container'>
      <h1>
      LogBody
      </h1>
      <button type='button' className='coinbody__container-history' onClick={() => setIsGame(!isGame)}>
        <div className='coinbody__container-history_text'>Back to the Game! (change these classes)</div>
        <div>&#8594;</div>
      </button>
    </div>
  )
}

export default LogBody