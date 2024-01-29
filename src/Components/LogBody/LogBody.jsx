import React, { useState } from 'react'
import "./logbody.css"
import Card from './Card/Card'
import Pagination from './Pagination/Pagination';


const LogBody = ({isGame, setIsGame, currentBet, currentPlayer, currentGuess, flipOutcome, flipWinner, timeOfFlip, history}) => {
  


  const totalLogs = history;

  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 8;

  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = totalLogs.slice(indexOfFirstLog, indexOfLastLog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

   const logs = () => {
     if (history.length > 0) {
      console.log(totalLogs)
      return currentLogs.map((game) => (
        <div key={Math.random()} className='card'>
          <div>Time of Flip: {game.time}</div>
          <div>Player: {game.player}</div>
          <div>Bet: ${game.bet}</div>
          <div>Player Guess: {game.guess}</div> 
          <div>Flip Outcome: {game.outcome}</div>
          <div>Round Winner: {game.roundWinner}</div>
          <div>Currently in the Lead: {game.overallWinner}</div>
          <div>Amount Owed to {game.overallWinner}: ${Math.abs(game.score)}</div>
        </div>
      ));
    }
  };
  
  return (
    <div className='logbody__container'>
      <div className='logbody_container-logs'>
        {logs()}
      
      </div>

      <Pagination paginate={paginate} logsPerPage={logsPerPage} totalLogsNum={totalLogs.length} currentPage={currentPage} />


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