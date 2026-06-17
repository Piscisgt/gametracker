import { useEffect } from "react"

import { getGames } from "../api/gameApi"
import { useGames } from "../hooks/useGames"

function HomePage() {
  const { games, setGames } = useGames()

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await getGames()

        setGames(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadGames()
  }, [setGames])

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Total juegos: {games.length}</p>
    </div>
  )
}

export default HomePage