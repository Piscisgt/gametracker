import type { Game } from "../types/Game"

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px"
      }}
    >
      <h3>{game.title}</h3>

      <p>Plataforma: {game.platform}</p>

      <p>Estado: {game.status}</p>
    </div>
  )
}

export default GameCard