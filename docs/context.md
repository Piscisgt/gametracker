# Context API

## Objetivo

La aplicación utiliza Context API para compartir información entre componentes sin necesidad de pasar props manualmente por múltiples niveles.

## Implementación

Se creó un contexto llamado GameContext.

El contexto almacena:

* Lista de juegos.
* Función para actualizar la lista de juegos.

## Provider

GameProvider envuelve toda la aplicación y proporciona acceso al estado global.

## Consumo

Los componentes acceden al contexto mediante el hook personalizado useGames.

## Ventajas

* Menos prop drilling.
* Estado centralizado.
* Mayor reutilización de componentes.
* Código más limpio y mantenible.
