import { useEffect } from "react"

import { getGames } from "../api/gameApi"
import { useGames } from "../hooks/useGames"

import GameList from "../components/GameList"

function GamesPage() {
  const { games, setGames } = useGames()

  useEffect(() => {
    async function loadGames() {
      const data = await getGames()

      setGames(data)
    }

    loadGames()
  }, [setGames])

  return (
    <div>
      <h1>Mis Juegos</h1>

      <GameList games={games} />
    </div>
  )
}

export default GamesPage