import React from 'react'
import "./coinbody.css"


const CoinBody = ({isGame, setIsGame}) => {
  return (
    <div className='coinbody__container'>
      
      <div className='coinbody__container-current'>
        <div className='coinbody__container-current_item'>
          <h3>Current Player</h3>
          <h3>Player 1</h3>
        </div>
        <div className='coinbody__container-current_item'>
          <h3>Current Bet</h3>
          <h3>$20</h3>
        </div> 
        <div className='coinbody__container-current_item'>
          <h3>Current Winner</h3>
          <h3>Player 2</h3>
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
          <button type='button' className='coinbody__container-body_bet-btn'>
            Place a Bet?
          </button>
        </div>

      </div>
      
      {/* To Log Page Button (absolute positioning right side) */}

      <button type='button' className='coinbody__container-history' onClick={() => setIsGame(!isGame)}>
        <div className='coinbody__container-history_text'>History</div>
        <div>&#8594;</div>
      </button>
    </div>
  )
}

export default CoinBody