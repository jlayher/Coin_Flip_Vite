import React from 'react'
import "./betmodal.css"

const BetModal = ({currentPlayer, setCurrentBet}) => {
  return (
  
    <div className='betmodal__container'>
      <div>Place Your Bet {currentPlayer}</div>
    </div>
  )
}

export default BetModal