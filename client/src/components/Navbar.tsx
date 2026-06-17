import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "16px",
        marginBottom: "24px"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}
      >
        <h2
          style={{
            color: "white",
            margin: 0
          }}
        >
          🎮 GameTracker
        </h2>

        <Link to="/" style={{ color: "white" }}>
          Dashboard
        </Link>

        <Link to="/games" style={{ color: "white" }}>
          Juegos
        </Link>

        <Link to="/add-game" style={{ color: "white" }}>
          Añadir
        </Link>

        <Link to="/stats" style={{ color: "white" }}>
          Estadísticas
        </Link>

        <Link to="/about" style={{ color: "white" }}>
          Acerca de
        </Link>
      </div>
    </nav>
  )
}

export default Navbar