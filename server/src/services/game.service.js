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

function deleteGame(id) {
  const index = games.findIndex(
    game => game.id === id
  )

  if (index === -1) {
    throw new Error("NOT_FOUND")
  }

  games.splice(index, 1)
}

function toggleGameStatus(id) {
  const game = games.find(
    game => game.id === id
  )

  if (!game) {
    throw new Error("NOT_FOUND")
  }

  game.status =
    game.status === "COMPLETADO"
      ? "JUGANDO"
      : "COMPLETADO"

  return game
}

module.exports = {
  getAllGames,
  createGame,
  deleteGame,
  toggleGameStatus
}