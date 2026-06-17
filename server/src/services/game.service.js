let games = [
  {
    id: 1,
    title: "League of Legends",
    platform: "PC",
    status: "JUGANDO",
    createdAt: new Date().toISOString()
  }
]

function getAllGames() {
  return games
}

function createGame(game) {
  const newGame = {
    id: Date.now(),
    ...game,
    createdAt: new Date().toISOString()
  }

  games.push(newGame)

  return newGame
}

module.exports = {
  getAllGames,
  createGame
}