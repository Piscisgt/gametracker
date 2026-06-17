import { useEffect, useState, useCallback } from "react"

import { getGames } from "../api/gameApi"
import { useGames } from "../hooks/useGames"

import GameList from "../components/GameList"

function GamesPage() {
  const { games, setGames } = useGames()

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")

  const loadGames = useCallback(async () => {
    try {
      setLoading(true)

      setError("")

      const data = await getGames()

      setGames(data)
    } catch {
      setError(
        "No se pudieron cargar los juegos"
      )
    } finally {
      setLoading(false)
    }
  }, [setGames])

  useEffect(() => {
    loadGames()
  }, [loadGames])

  if (loading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Mis Juegos</h1>

      <GameList games={games} />
    </div>
  )
}

export default GamesPage