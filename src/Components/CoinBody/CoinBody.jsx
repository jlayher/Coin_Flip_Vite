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
      
        {/* Left Panel */}
        <div className='coinbody__container-left'>
          {/* Container Current Table */}
          <div className='coinbody__container-left_current'>
            <div className='coinbody__container-left_current-item'>
              <h3>Current Player: {currentPlayer}</h3>
            </div>
            <div className='coinbody__container-left_current-item'>
              <h3>Current Bet: ${currentBet}</h3>
            </div> 
            <div className='coinbody__container-left_current-item'>
              <h3>{currentPlayer} Current Guess: {currentGuess}</h3>
            </div>
          </div>   
      
          {/* Left Buttons */}
          <div className='coinbody__container-left_btns'>
            {/* Place Bet Banner Btn */}
            <div className='coinbody__container-left_bet'>
              <button type='button' className='coinbody__container-left_btn' onClick={() => setShowBetModal(!showBetModal)}>
              {currentBet === 0
                ? <>Place a Bet?</>
                : <>Change Bet?</>}
              </button>
            </div>
            {/* Change Player Btn */}
            <div className='coinbody__container-left_bet'>
              <button type='button' className='coinbody__container-left_btn' onClick={() => changePlayer()}>
                <div>Change Player</div>
              </button>
            </div>
        </div>  
        
          
      </div>
      


{/* Center Panel for Coin Image Flip Button */}
      <div className='coinbody__container-center'>
        {/* coin image/flip button */}
        <div className='coinbody__container-center_coin'>
            <button type='button'  className='coinbody__container-center_coin-button' disabled={showOutcomeText || showBetModal } onClick={() => coinFlip()}>
            {coinFace === "Heads"
              ? <img src='../../../assets/heads-pic.png' alt='coin' />
              : <img src='../../../assets/tails-pic.png' alt='coin' />
            }
          </button>
        <div className='coinbody__container-center_text'>Click the Coin to Flip!</div>
        </div>
      </div>
        
    {/*Right Panel for Currently Winning Box  */}
      <div className='coinbody__container-right'>
          {/* conditional render this if no one is in the lead.  "No Current Winner" */}
          {currentWinner && P1Score !== 0
            ? <h3>{currentWinner} is owed ${Math.abs(P1Score)}</h3>
            : <h3>No Current Winner</h3>
          }
      </div>
      
      {/* To Log Page Button (absolute positioning right side) */}
      <button type='button' className='coinbody__container-history' onClick={() => setIsGame(false)}>
        <div className='coinbody__container-history_text'>History</div>
        <div>&#8594;</div>
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
          {flipWinner
            ? <div>{flipWinner} Won the Round!</div>
            : <></>
          }
          {currentWinner && P1Score !== 0
            ? <div>{currentWinner} is in the Lead!</div>
            : <></>
          }
          <button type='button' className='coinbody__outcome-button' onClick={() => !showOutcomeText}>
            Close
          </button>
        </div>}
    </>
  )
}

export default CoinBody