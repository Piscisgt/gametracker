const express = require("express")

const router = express.Router()

const gameController = require("../controllers/game.controller")

router.get("/", gameController.getGames)

router.post("/", gameController.createGame)

router.delete(
  "/:id",
  gameController.deleteGame
)

router.patch(
  "/:id",
  gameController.toggleGameStatus
)

module.exports = router