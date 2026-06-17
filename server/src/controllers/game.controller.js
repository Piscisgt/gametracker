const gameService = require("../services/game.service")

function getGames(req, res) {
  const games = gameService.getAllGames()

  res.status(200).json(games)
}

function createGame(req, res) {
  const { title, platform, status } = req.body

  if (!title || !platform || !status) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios"
    })
  }

  const game = gameService.createGame({
    title,
    platform,
    status
  })

  res.status(201).json(game)
}

function deleteGame(req, res) {
  const id = Number(req.params.id)

  gameService.deleteGame(id)

  res.status(204).send()
}

function toggleGameStatus(req, res) {
  const id = Number(req.params.id)

  const game =
    gameService.toggleGameStatus(id)

  res.status(200).json(game)
}

module.exports = {
  getGames,
  createGame,
  deleteGame,
  toggleGameStatus
}