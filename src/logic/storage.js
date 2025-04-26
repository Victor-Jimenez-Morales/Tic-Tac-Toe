export function saveGameToLocalStorage({ board, turn }) {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export function removeGameFromLocalStorage() {
  if (window.localStorage.getItem('board'))
    window.localStorage.removeItem('board')

  if (window.localStorage.getItem('turn'))
    window.localStorage.removeItem('turn')
}