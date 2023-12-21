import React from 'react'
import "./coinbody.css"
import { useState } from 'react';
import BetModal from './BetModal/BetModal';


const CoinBody = ({ isGame, setIsGame, currentPlayer, currentWinner, currentBet, setCurrentBet }) => {
  
  const [showBetModal, setShowBetModal] = useState(false);

  return (
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

      <div className='coinbody__container-body'>
        {/* coin image/flip button */}
        <div className='coinbody__container-body_coin'>
          <button type='button' className='coinbody__container-body_coin-button'>
            <img src='../../../public/assets/coin_generic.png' alt='coin' />
          </button>
          <div>Click to Flip!</div>
        </div>

        {/* Place Bet Banner Btn */}
        <div className='coinbody__container-body_bet'>
          <button type='button' className='coinbody__container-body_bet-btn' onClick={() => setShowBetModal(!showBetModal)}>
            Place a Bet?
          </button>
        </div>

      </div>
      
      {/* To Log Page Button (absolute positioning right side) */}

      <button type='button' className='coinbody__container-history' onClick={() => setIsGame(!isGame)}>
        <div className='coinbody__container-history_text'>History</div>
        <div>&#8594;</div>
      </button>

      {/* Display BetModal onClick (remove when currentBet is submitted, or clicking outside of Modal window) */}
      {showBetModal && <BetModal currentPlayer={currentPlayer} setCurrentBet={setCurrentBet} />}

    </div>
  )
}

export default CoinBody