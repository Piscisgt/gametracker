const gameRoutes = require("./routes/game.routes")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1/games", gameRoutes)

app.get("/", (req, res) => {
  res.json({
    message: "GameTracker API funcionando"
  })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})