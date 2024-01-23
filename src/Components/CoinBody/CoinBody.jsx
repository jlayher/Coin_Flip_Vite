/* eslint-disable react/prop-types */
import React from 'react'
import "./coinbody.css"
import { useState } from 'react';
import BetModal from './BetModal/BetModal';


const CoinBody = ({
  showOutcomeText,
  showBetModal,
  setShowBetModal,
  changePlayer,
  isGame,
  setIsGame,
  currentPlayer,
  currentWinner,
  currentBet,
  setCurrentBet,
  flipOutcome,
  coinFlip,
  currentGuess,
  setCurrentGuess,
  P1Score,
  flipWinner,
  resetGame,
  coinFace}) => {
  
  return (
    <>
    <div className='coinbody__container'>
      
      <div className='coinbody__container-current'>
        <div className='coinbody__container-current_item'>
          <h3>Current Player: {currentPlayer}</h3>
        </div>
        <div className='coinbody__container-current_item'>
          <h3>Current Bet: ${currentBet}</h3>
        </div> 
          
        <div className='coinbody__container-current_item'>
          <h3>{currentPlayer} Current Guess: {currentGuess}</h3>
        </div>
      </div>   
      
      <div className='coinbody__container-current_winner'>
          {/* conditional render this if no one is in the lead.  "No Current Winner" */}
          {currentWinner && P1Score !== 0
            ? <h3>{currentWinner} is owed ${Math.abs(P1Score)}0000000</h3>
            : <h3>No Current Winner</h3>
          }
      </div>


      <div className='coinbody__container-body'>
        {/* coin image/flip button */}
        <div className='coinbody__container-body_coin'>
            <button type='button' className='coinbody__container-body_coin-button' onClick={() => coinFlip()}>
              {coinFace === "Heads"
                ? <img src='../../../public/assets/heads-pic.png' alt='coin' />
                : <img src='../../../public/assets/tails-pic.png' alt='coin' />
              }
            
          </button>
          <div>Click to Flip!</div>
        </div>

        {/* Place Bet Banner Btn */}
        <div className='coinbody__container-body_bet'>
          <button type='button' className='coinbody__container-body_bet-btn' onClick={() => setShowBetModal(!showBetModal)}>
              {currentBet === 0
                ? <>Place a Bet?</>
                : <>Bet Submitted!</>}
          </button>
          </div>
          
      </div>
      
      {/* To Log Page Button (absolute positioning right side) */}
      <button type='button' className='coinbody__container-history' onClick={() => setIsGame(false)}>
        <div className='coinbody__container-history_text'>History</div>
        <div>&#8594;</div>
      </button>
        
      <button type='button' className='coinbody__container-reset' onClick={() => changePlayer()}>
        <div className='coinbody__container-history_text'>Change Player</div>
        {/* <div>&#8592;</div> */}
      </button>

    </div>
    
    {/* Display BetModal onClick (remove when currentBet is submitted, or clicking outside of Modal window) */}
      {showBetModal && <BetModal currentPlayer={currentPlayer} setCurrentBet={setCurrentBet} setCurrentGuess={setCurrentGuess} setShowBetModal={setShowBetModal} />}

    {/* Display Flip Outcome Banner and Fade Out to display: none after 2 seconds */}
      {showOutcomeText &&
        <div className='coinbody__outcome'>
          <div>
            Player {currentPlayer} Guessed: {currentGuess}
          </div>
          <div>
            Flip Outcome: {flipOutcome}
          </div>
          <div>
            {flipWinner} Won the Round!
          </div>
          <div>
            {currentWinner} is in the Lead!
          </div>
        
        </div>}
    </>
  )
}

export default CoinBody