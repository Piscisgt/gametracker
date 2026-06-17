import { useMemo } from "react"

import { useGames } from "../hooks/useGames"

function StatsPage() {
  const { games } = useGames()

  const stats = useMemo(() => {
    return {
      total: games.length,

      pendientes: games.filter(
        game => game.status === "PENDIENTE"
      ).length,

      jugando: games.filter(
        game => game.status === "JUGANDO"
      ).length,

      completados: games.filter(
        game => game.status === "COMPLETADO"
      ).length,

      abandonados: games.filter(
        game => game.status === "ABANDONADO"
      ).length
    }
  }, [games])

  return (
    <div>
      <h1>Estadísticas</h1>

      <p>Total: {stats.total}</p>

      <p>Pendientes: {stats.pendientes}</p>

      <p>Jugando: {stats.jugando}</p>

      <p>Completados: {stats.completados}</p>

      <p>Abandonados: {stats.abandonados}</p>
    </div>
  )
}

export default StatsPage