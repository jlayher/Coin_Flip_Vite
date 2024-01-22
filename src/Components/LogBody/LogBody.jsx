import React from 'react'
import "./logbody.css"
import Card from './Card/Card'


const LogBody = ({isGame, setIsGame, currentBet, currentPlayer, currentGuess, flipOutcome, flipWinner, timeOfFlip, history}) => {
  
   const logs = () => {
    if (history.length > 0) {
      return history.map((game) => (
        <div key={Math.random()} className='card'>
          <div>Time of Flip: {game.time}</div>
          <div>Player: {game.player}</div>
          <div>Bet: ${game.bet}</div>
          <div>Player Guess: {game.guess}</div> 
          <div>Flip Outcome: {game.outcome}</div>
          <div>Round Winner: {game.roundWinner}</div>
          <div>Currently in the Lead: {game.overallWinner}</div>
        </div>
      ));
    }
  };
  
  return (
    <div className='logbody__container'>
      <div>
        {logs()}
      </div>



      <button type='button' className='logbody__container-history' onClick={() => setIsGame(!isGame)}>
        <div>&#8592;</div>
        <div className='logbody__container-history_text'>Back to the Game!</div>
      </button>
    </div>
  )
}

export default LogBody

      {/* // <div>
      //   <div>Time of Flip: {timeOfFlip}</div>
      //   <div>Player: {currentPlayer}</div>
      //   <div>Bet: ${currentBet}</div>
      //   <div>Player Guess: {currentGuess} </div>
      //   <div>Flip Value: {flipOutcome}</div>
      //   <div>Winner: {flipWinner}</div>
      // </div> */}