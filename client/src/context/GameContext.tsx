import {
  createContext,
  useContext,
  useState
} from "react"

import type { ReactNode } from "react"

import type { Game } from "../types/Game"

interface GameContextType {
  games: Game[]
  setGames: React.Dispatch<React.SetStateAction<Game[]>>
}

const GameContext = createContext<GameContextType | null>(null)

export function GameProvider({
  children
}: {
  children: ReactNode
}) {
  const [games, setGames] = useState<Game[]>([])

  return (
    <GameContext.Provider
      value={{
        games,
        setGames
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGameContext() {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error("GameContext no disponible")
  }

  return context
}