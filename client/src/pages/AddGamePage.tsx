import GameForm from "../components/GameForm"
import { createGame } from "../api/gameApi"

function AddGamePage() {
  async function handleCreate(
    title: string,
    platform: string,
    status: string
  ) {
    try {
      await createGame({
        title,
        platform,
        status
      })

      alert("Juego creado")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Añadir Juego</h1>

      <GameForm onSubmit={handleCreate} />
    </div>
  )
}

export default AddGamePage