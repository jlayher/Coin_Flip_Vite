import React from 'react'
import "./card.css"

const Card = ({ history }) => { 
   

  return (
    <div>
      
      Card
      <div>Time of Flip: {history.time}</div>
      <div>Player: {history.player}</div>
      <div>Bet: ${history.bet}</div>
      <div>Player Guess: {history.guess} </div>
      <div>Flip Outcome: {history.outcome}</div>
      <div>Round Winner: {history.roundWinner}</div>
      <div>Currently in the Lead: {history.overallWinner}</div>
    </div>

  )
}

export default Card