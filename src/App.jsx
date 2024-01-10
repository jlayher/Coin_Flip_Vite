import { useState, useEffect } from 'react'
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
  const [currentGuess, setCurrentGuess] = useState('');
  const [flipOutcome, setFlipOutcome] = useState("");
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
  
  // calcFlip()
  // generate a random number between 0 and 1, and round to nearest integer.
    // if 0, setFlipOutcome to Heads
  // else setFlipOutcome to Tails
  
  // this may need to be called in useEffect. Same issue as previous version.
  const calcFlip = () => {
    const random = Math.floor(Math.random() * 2);
    const flip = random ? "Heads" : "Tails";
    setFlipOutcome(flip);
  }


  //handleFlip Function
  const handleFlip = () => {
    //set heads or tails in flipOutcome
    calcFlip();



    //Reset Game
    //Change current Player after turn ends
    changePlayer();
    setCurrentBet(0);

  }

  const changePlayer = () => {
    if (currentPlayer === "P1") {
      setCurrentPlayer("P2");
    } else {
      setCurrentPlayer("P1");
    }
  }

  return (
    <div className='wrapper'>
      <Header isGame={isGame} />
      {isGame ?
        <CoinBody
          calcFlip={calcFlip}
          isGame={isGame}
          setIsGame={setIsGame}
          currentPlayer={currentPlayer}
          // setCurrentPlayer={setCurrentPlayer}
          currentWinner={currentWinner}
          // setCurrentWinner={setCurrentWinner}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet} 
          handleFlip={handleFlip} 
          flipOutcome={flipOutcome}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          />
        :
        <LogBody
          isGame={isGame}
          setIsGame={setIsGame} />}
      <Footer />
    </div>
  )
}

export default App
