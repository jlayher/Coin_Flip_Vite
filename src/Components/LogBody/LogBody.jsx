import React from 'react'
import "./logbody.css"

const LogBody = ({isGame, setIsGame}) => {
  return (
    <div className='logbody__container'>
      
      <div>

      </div>


      <button type='button' className='logbody__container-history' onClick={() => setIsGame(!isGame)}>
        <div>&#8592;</div>
        <div className='logbody__container-history_text'>Back to the Game!</div>
      </button>
    </div>
  )
}

export default LogBody