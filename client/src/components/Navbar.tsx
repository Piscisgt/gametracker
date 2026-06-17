import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>{" | "}
      <Link to="/games">Juegos</Link>{" | "}
      <Link to="/add-game">Añadir</Link>{" | "}
      <Link to="/stats">Estadísticas</Link>{" | "}
      <Link to="/about">Acerca de</Link>
    </nav>
  )
}

export default Navbar