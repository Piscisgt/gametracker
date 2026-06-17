import type { Game } from "../types/Game"

import GameCard from "./GameCard"

interface Props {
  games: Game[]
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

function GameList({
  games,
  onDelete,
  onToggle
}: Props) {
  return (
    <div>
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default GameList