export type GameStatus =
  | "PENDIENTE"
  | "JUGANDO"
  | "COMPLETADO"
  | "ABANDONADO"

export interface Game {
  id: number
  title: string
  platform: string
  status: GameStatus
  createdAt: string
}