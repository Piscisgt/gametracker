import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import GamesPage from "./pages/GamesPage"
import AddGamePage from "./pages/AddGamePage"
import StatsPage from "./pages/StatsPage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/add-game" element={<AddGamePage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App