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
  resetGame }) => {
  
  return (
    <>
    <div className='coinbody__container'>
      
      <div className='coinbody__container-current'>
        <div className='coinbody__container-current_item'>
          <h3>Current Player</h3>
          <h3>{currentPlayer}</h3>
        </div>
        <div className='coinbody__container-current_item'>
          <h3>Current Bet</h3>
          <h3>${currentBet}</h3>
        </div> 
        <div className='coinbody__container-current_item'>
          <h3>Current Winner</h3>
          <h3>{currentWinner}</h3>
        </div>
      </div>     
      
      <div className='coinbody__container-current_item-outcome'>
        <h3>Flip Outcome: </h3>
        <h3>&nbsp;{flipOutcome}</h3>
      </div>
        
      <div className='coinbody__container-current_item-outcome'>
        <h3>{currentPlayer} Current Guess: {currentGuess}</h3>
      </div>

      <div className='coinbody__container-current_item-outcome'>
        <h3>P1 Total Score: {P1Score}</h3>
        </div>
        
      <div className='coinbody__container-current_item-outcome'>
        <h3>Flip (Round) Winner: {flipWinner}</h3>
        </div>

      <div className='coinbody__container-body'>
        {/* coin image/flip button */}
        <div className='coinbody__container-body_coin'>
          <button type='button' className='coinbody__container-body_coin-button' onClick={() => coinFlip()}>
            <img src='../../../public/assets/coin_generic.png' alt='coin' />
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
          
          <div>
            <button onClick={() => resetGame()}>Reset</button>
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