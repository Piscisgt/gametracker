import type { Game } from "../types/Game"

const API_URL = "https://gametracker-api-jehr.onrender.com"

export async function getGames(): Promise<Game[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Error obteniendo juegos")
  }

  return response.json()
}

export async function createGame(game: {
  title: string
  platform: string
  status: string
}): Promise<Game> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  })

  if (!response.ok) {
    throw new Error("Error creando juego")
  }

  return response.json()
}

export async function deleteGame(
  id: number
): Promise<void> {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE"
    }
  )

  if (!response.ok) {
    throw new Error("Error eliminando juego")
  }
}

export async function toggleGameStatus(
  id: number
): Promise<Game> {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PATCH"
    }
  )

  if (!response.ok) {
    throw new Error("Error actualizando juego")
  }

  return response.json()
}