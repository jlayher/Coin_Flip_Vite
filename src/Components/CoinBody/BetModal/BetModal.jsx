import React from 'react'
import "./betmodal.css"

const BetModal = ({ currentPlayer, setCurrentBet, setCurrentGuess, setShowBetModal }) => {
  
  const betRef = React.useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const bet = betRef.current.value;
    console.log(bet)
    setCurrentBet(bet);



    setShowBetModal(false);

  }

  return (
  
    <div className='betmodal__container'>
      
      <div className='betmodal__container-title'>{currentPlayer} Bet</div>

      <form className='betmodal__form' onSubmit={handleSubmit}>
        
        <label htmlFor='bet' >Bet</label>
        <input type='number' name='bet' className='betmodal__container-bet' ref={betRef}></input>

        <div className='betmodal__container-icons'>
          {/* toggle selected class around Images */}

          <label htmlFor="heads"></label>
            <input
              type="button"
              id="heads"
              name="flipvalue"
              value="Heads"
              onChange={(e) => {
                setCurrentGuess(e.target.value)      
              }}></input>
          <label htmlFor="tails"></label>
            <input
              type="button"
              id="tails"
              name="flipvalue"
              value="Tails"
              onChange={(e) => {
                console.log(e.target.value)
              }}></input>
        </div>

        <button type='submit' className='betmodal__container-btn'>Place Bet</button>

      </form>
        

    </div>
  )
}

export default BetModal