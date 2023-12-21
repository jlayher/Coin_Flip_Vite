import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import CoinBody from './Components/CoinBody/CoinBody'
import Footer from './Components/Footer/Footer'
import LogBody from './Components/LogBody/LogBody'

function App() {
  const [isGame, setIsGame] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("P1");
  const [currentWinner, setCurrentWinner] = useState("P2");
  const [currentBet, setCurrentBet] = useState(0);

  const [flipOutcome, setFlipOutcome] = useState("Heads");
  const [history, setHistory] = useState([]);

  //handleFlip
  // calculate heads/tails and setFlipOutcome
  // take currentBet value and add/subtract from P1Score
    // if P1 is currentPlayer and wins, add currentBet to P1Score,
    // else if loss, subtract the currentBet from P1Score.
    // Repeat for P2 win / loss conditions
  // if P1Score is positive, setCurrentWinner to P1, else setCurrentWinner to P2

  // generate Win/Loss Modal
  // update history array
  // reset currentBet
  // switch currentPlayer
  

  //calculate current player and set state (gets called by handleFlip)

  return (
    <div className='wrapper'>
      <Header isGame={isGame} />
      {isGame ?
        <CoinBody
          isGame={isGame}
          setIsGame={setIsGame}
          currentPlayer={currentPlayer}
          // setCurrentPlayer={setCurrentPlayer}
          currentWinner={currentWinner}
          // setCurrentWinner={setCurrentWinner}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet}/>
        :
        <LogBody
          isGame={isGame}
          setIsGame={setIsGame} />}
      <Footer />
    </div>
  )
}

export default App
