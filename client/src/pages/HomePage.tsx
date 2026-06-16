import { useGames } from "../hooks/useGames"

function HomePage() {
  const { games } = useGames()

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Total juegos: {games.length}</p>
    </div>
  )
}

export default HomePage