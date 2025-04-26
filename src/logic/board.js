import { WINNER_COMBOS } from './constants.js'

export const checkWinnerFrom = ( boardToCheck ) => {
  // check if there is a winner
  for ( const combo of WINNER_COMBOS ) {
    const [a, b, c] = combo

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) return boardToCheck[a]
  }

  // if there is no winner
  return null
}

export const checkEndGameFrom = ( boardToCheck ) => {
  // check if all squares are filled
  return boardToCheck.every( square => square !== null )
}