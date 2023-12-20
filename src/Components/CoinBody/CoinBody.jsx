import React from 'react'
import "./coinbody.css"

const CoinBody = () => {
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

      
      
    </div>
  )
}

export default CoinBody