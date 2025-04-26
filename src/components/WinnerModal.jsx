import Square from "./Square"

export default function WinnerModal ({ winner, resetGame }) {
  const winnerText = winner === false ? 'DRAW' : 'WINNER'
  const winnerIcon = winner === 'x' ? 
    <i className="fa-solid fa-x x"></i> : 
    <i className="fa-solid fa-o o"></i>

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{ winnerText }</h2>

        <header className='win'>
          { winner && ( <Square>{ winnerIcon }</Square> ) }
        </header>

        <footer>
          <button onClick={resetGame}>New game</button>
        </footer>
      </div>
    </section>
  )
}