import Square from './Square.jsx'

export default function GameBoard ({ board, updateBoard}) {
  return (
    <section className='game'>
      {
        board.map((square, index) => {
          return (
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {
                  square === 'x' ? <i className="fa-solid fa-x x"></i> : 
                  square === 'o' ? <i className="fa-solid fa-o o"></i> : null
                }
            </Square>
          )
        })
      }
    </section>
  )
}