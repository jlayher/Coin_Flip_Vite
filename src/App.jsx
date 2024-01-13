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

  //runs when Coin is Clicked
  const coinFlip = () => {
    calcFlip();
    setFlipped(true);
  }
  

  //calculate heads or tails
  const calcFlip = () => {
    const random = Math.floor(Math.random() * 2);
    const flip = random ? "Heads" : "Tails";
    setFlipOutcome(flip);
    updateScore();
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
      setCurrentWinner("P1") 
    } else if (P1Score < 0) {
      setCurrentWinner("P2")
    } else {
      setCurrentWinner("Tied")
    }
  }



  const resetGame = () => {
    setCurrentBet(0);
    setCurrentGuess('');
    setFlipWinner('');
    setFlipOutcome('');
    setP1Score(0);
  }

  const changePlayer = () => {
    if (currentPlayer === "P1") {
      setCurrentPlayer("P2");
    } else {
      setCurrentPlayer("P1");
    }
  }


  useEffect(()=> {
    const updateScore = () => {
      let bet = parseInt(currentBet);
      if (flipWinner === "P1") {
        setP1Score(P1Score + bet)
      } else {
        setP1Score(P1Score - bet)
      }
    }
    updateScore();
  },[flipped])


  return (
    <div className='wrapper' onClick={() => {
      if (showBetModal === true) {
        setShowBetModal(!showBetModal)
      }
    }}>
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
          showBetModal={showBetModal}
          setShowBetModal={setShowBetModal}
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
