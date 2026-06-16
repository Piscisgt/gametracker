import { useGameContext } from "../context/GameContext"

export function useGames() {
  return useGameContext()
}