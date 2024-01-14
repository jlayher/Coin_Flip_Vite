import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import CoinBody from './Components/CoinBody/CoinBody'
import Footer from './Components/Footer/Footer'
import LogBody from './Components/LogBody/LogBody'

function App() {
  const [isGame, setIsGame] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("P1");
  const [currentWinner, setCurrentWinner] = useState("");
  const [currentBet, setCurrentBet] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [flipOutcome, setFlipOutcome] = useState("");
  const [flipWinner, setFlipWinner] = useState("")
  const [history, setHistory] = useState([]);
  const [P1Score, setP1Score] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showBetModal, setShowBetModal] = useState(false);
  const [showOutcomeText, setShowOutcomeText] = useState(false);

  //runs when Coin is Clicked
  const coinFlip = () => {
    //calc the flip value and set the flipOutcome to Heads or Tails
    calcFlip();
    setShowOutcomeText(true);
  }

  //calculate heads or tails
  const calcFlip = () => {
    //set the flipOutcome
    const random = Math.floor(Math.random() * 2);
    const flip = random ? "Heads" : "Tails";
    const bet = parseInt(currentBet);
    const score = P1Score;
    setFlipOutcome(flip);
    //set flipWinner and P1Score
    //if there is no guess, set flipWinner to "", reset currentBet to 0, and do not update P1Score
    if (currentGuess === "") {
      setFlipWinner("");
      setCurrentBet(0);
      //update P1Score Based on Current Bet and Guess to determine the Round Winner
    } else if (currentPlayer === "P1" && currentGuess === flip) {
      setFlipWinner("P1")
      setP1Score(() => score + bet)
    } else if (currentPlayer === "P1" && currentGuess !== flip) {
      setFlipWinner("P2")
      setP1Score(() => score - bet)
    } else if (currentPlayer === "P2" && currentGuess === flip) {
      setFlipWinner("P2")
      setP1Score(() => score - bet)
    } else if (currentPlayer === "P2" && currentGuess !== flip) {
      setFlipWinner("P1")
      setP1Score(() => score + bet)
    }
  }

  useEffect(() => {
    //calculate Overall Winner
    const score = P1Score;
    if (score > 0) {
      setCurrentWinner(() => "P1")
    } else if (score < 0) {
      setCurrentWinner(() => "P2")
    } else {
      setCurrentWinner(() => "No One")
    }
  })

  const changePlayer = () => {
    if (currentPlayer === "P1") {
      setCurrentPlayer("P2");
    } else {
      setCurrentPlayer("P1");
    }
    setCurrentBet(0);
    setCurrentGuess("");
  }


  const resetGame = () => {
    // setCurrentBet(0);
    // setCurrentGuess('');
    // setFlipWinner('');
    // setFlipOutcome('');
    // setP1Score(0);
  }


  return (
    <div className='wrapper' onClick={() => {
      if (showBetModal === true) {
        setShowBetModal(!showBetModal)
        // remove this code!!!!  change this in CoinBody.css so it transitions out.  currently bugs when clicking to flip while the Outcome Text is already visible
      } else if (showOutcomeText === true) {
        setShowOutcomeText(false)
      }
    }}>
      <Header isGame={isGame} />
      {isGame ?
        <CoinBody
          calcFlip={calcFlip}
          isGame={isGame}
          setIsGame={setIsGame}
          currentPlayer={currentPlayer}
          currentWinner={currentWinner}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet} 
          flipOutcome={flipOutcome}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          P1Score={P1Score}
          flipWinner={flipWinner}
          coinFlip={coinFlip}
          resetGame={resetGame}
          changePlayer={changePlayer}
          showBetModal={showBetModal}
          setShowBetModal={setShowBetModal}
          showOutcomeText={showOutcomeText}
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
