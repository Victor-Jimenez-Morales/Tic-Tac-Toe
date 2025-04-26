import { useEffect, useState } from 'react'

// styles
import './App.css'
import confetti from 'canvas-confetti'

//  components
import GameBoard from './components/GameBoard.jsx'
import Square from './components/Square.jsx'
import WinnerModal from './components/WinnerModal.jsx'

// logic
import { TURNS } from './logic/constants.js'
import { checkWinnerFrom, checkEndGameFrom } from './logic/board.js'
import { saveGameToLocalStorage } from './logic/storage.js'

export default function App(){
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  
  const [winner, setWinner] = useState(null) // null = no winner, false = draw

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(winner === TURNS.X ? TURNS.O : TURNS.X)
    setWinner(null)
  }

  const updateBoard = ( index ) => {
    // if the square is already filled or there is a winner, return
    if ( board[index] || winner ) return

    // update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // check if there is a winner or a draw
    const newWinner = checkWinnerFrom(newBoard)
    if ( newWinner ) {
      setWinner(newWinner)
      confetti()
    }
    else if ( checkEndGameFrom(newBoard) ) 
      setWinner(false)
  }

  // save the game in local storage when the board or turn changes
  useEffect(() => {
    saveGameToLocalStorage({ board: board, turn: turn })
  }, [board, turn])

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>

      <button onClick={resetGame}>Reset game</button>

      <GameBoard board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          <i className="fa-solid fa-x x"></i>
        </Square>
        <Square isSelected={turn === TURNS.O}>
          <i className="fa-solid fa-o o"></i>
        </Square>
      </section>

      { winner !== null && (<WinnerModal winner={winner} resetGame={resetGame} />) } 
    </main>
  )
}