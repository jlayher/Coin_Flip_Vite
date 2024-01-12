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


  //runs when Coin is Clicked
  const coinFlip = () => {
    calcFlip();
    updateScore();
  }
  

  //calculate heads or tails
  const calcFlip = () => {
    const random = Math.floor(Math.random() * 2);
    const flip = random ? "Heads" : "Tails";
    setFlipOutcome(flip);
  }

  //call roundWinner to set the flipWinner when the flipOutcome is determined by calcFlip being called and updating flipOutcome
  useEffect(() => {
    roundWinner();

  }, [flipOutcome])


  //Calculate flipWinner (current player's guess should match the flip outcome)
  const roundWinner = () => {
    if (!currentGuess) {
        setFlipWinner("")
    } else {
      if (currentPlayer === "P1" && currentGuess === flipOutcome) {
          setFlipWinner("P1")
        } else if (currentPlayer === "P1" && currentGuess !== flipOutcome) {
          setFlipWinner("P2")
        } else if (currentPlayer === "P2" && currentGuess === flipOutcome) {
          setFlipWinner("P2")
        } else if (currentPlayer === "P2" && currentGuess !== flipOutcome) {
          setFlipWinner("P1")
        }
      else 
          setFlipWinner("")
    }
  }
        
  const calcCurrentWinner = () => {
    if (P1Score > 0) {
      console.log("P1 is Winning")
      setCurrentWinner("P1") 
    } else if (P1Score < 0) {
      console.log("P1 is Losing")
      setCurrentWinner("P2")
    } else {
      console.log("Tied Game!")
      setCurrentWinner("Tied")
    }
  }



  const resetGame = () => {
    setCurrentBet(0);
    setCurrentGuess('');
    setFlipWinner('');
    setFlipOutcome('');
  }

  const changePlayer = () => {
    if (currentPlayer === "P1") {
      setCurrentPlayer("P2");
    } else {
      setCurrentPlayer("P1");
    }
  }

  // const updateScore = () => {
  //   let bet = parseInt(currentBet);
  //   if (flipWinner === "P1") {
  //     setP1Score(P1Score + bet)
  //   } else {
  //     setP1Score(P1Score - bet)
  //   }
  // }

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
          // handleFlip={handleFlip} 
          flipOutcome={flipOutcome}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          P1Score={P1Score}
          flipWinner={flipWinner}
          coinFlip={coinFlip}
          resetGame={resetGame}
          changePlayer={changePlayer}
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
