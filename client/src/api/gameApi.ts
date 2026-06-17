import type { Game } from "../types/Game"

const API_URL = "http://localhost:3000/api/v1/games"

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