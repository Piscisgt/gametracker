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

  const cardStyle = {
    background: "#f3f4f6",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center" as const
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >
      <h1>📊 Estadísticas</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px"
        }}
      >
        <div style={cardStyle}>
          <h3>Total</h3>
          <h1>{stats.total}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Pendientes</h3>
          <h1>{stats.pendientes}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Jugando</h3>
          <h1>{stats.jugando}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Completados</h3>
          <h1>{stats.completados}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Abandonados</h3>
          <h1>{stats.abandonados}</h1>
        </div>
      </div>
    </div>
  )
}

export default StatsPage