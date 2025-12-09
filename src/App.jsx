import { useState } from 'react'
import './App.css'

function App() {
  const [diceValue, setDiceValue] = useState(1)
  const [isRolling, setIsRolling] = useState(false)

  const rollDice = () => {
    setIsRolling(true)
    
    // Animate the dice rolling
    let rollCount = 0
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1)
      rollCount++
      
      if (rollCount >= 10) {
        clearInterval(rollInterval)
        setIsRolling(false)
      }
    }, 100)
  }

  const getDiceFace = (value) => {
    const dots = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8]
    }
    
    return (
      <div className="dice-face">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div 
            key={i} 
            className={`dot ${dots[value].includes(i) ? 'active' : ''}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="app">
      <h1>🎲 Dice Roller</h1>
      <div className={`dice ${isRolling ? 'rolling' : ''}`}>
        {getDiceFace(diceValue)}
      </div>
      <button 
        onClick={rollDice} 
        disabled={isRolling}
        className="roll-button"
      >
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </button>
      <p className="result">You rolled: {diceValue}</p>
    </div>
  )
}

export default App
