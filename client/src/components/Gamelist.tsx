import type { Game } from "../types/Game"

import GameCard from "./GameCard"

interface Props {
  games: Game[]
}

function GameList({ games }: Props) {
  return (
    <div>
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
        />
      ))}
    </div>
  )
}

export default GameList