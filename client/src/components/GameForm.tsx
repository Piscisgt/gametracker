import { useState } from "react"

interface Props {
  onSubmit: (
    title: string,
    platform: string,
    status: string
  ) => void
}

function GameForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("")
  const [platform, setPlatform] = useState("PC")
  const [status, setStatus] = useState("PENDIENTE")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim()) return

    onSubmit(title, platform, status)

    setTitle("")
  }

return (
  <div>
    <h2>FORMULARIO CARGADO</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option>PC</option>
        <option>PlayStation</option>
        <option>Xbox</option>
        <option>Nintendo</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>PENDIENTE</option>
        <option>JUGANDO</option>
        <option>COMPLETADO</option>
        <option>ABANDONADO</option>
      </select>

      <button type="submit">
        Añadir Juego
      </button>
    </form>
  </div>
)
}
export default GameForm