import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import CoinBody from './Components/CoinBody/CoinBody'
import Footer from './Components/Footer/Footer'
import LogBody from './Components/LogBody/LogBody'

function App() {
  const [isGame, setIsGame] = useState(true);

  return (
    <div className='wrapper'>
      <Header isGame={isGame} />
      {isGame ? <CoinBody isGame={isGame} setIsGame={setIsGame} />
        : <LogBody isGame={isGame} setIsGame={setIsGame} />}
      <Footer />
    </div>
  )
}

export default App
