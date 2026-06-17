import type { Game } from "../types/Game"

interface Props {
  game: Game
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

function GameCard({
  game,
  onDelete,
  onToggle
}: Props) {
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

      <button
        onClick={() => onToggle(game.id)}
      >
        Cambiar Estado
      </button>

      <button
        onClick={() => onDelete(game.id)}
      >
        Eliminar
      </button>
    </div>
  )
}

export default GameCard