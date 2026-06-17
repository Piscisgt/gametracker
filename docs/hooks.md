# Hooks de React

## useState

Se utilizó para gestionar estados locales en formularios, carga de datos y mensajes de error.

Ejemplos:
* Campos del formulario de creación de juegos.
* Estado de carga.
* Estado de error.

## useEffect

Se utilizó para cargar datos desde la API al iniciar determinadas páginas.

Ejemplo:
* Obtener la lista de juegos desde el backend.

## useMemo

Se utilizó en la página de estadísticas para calcular información derivada a partir de la lista de juegos.
Permite evitar cálculos innecesarios cuando los datos no cambian.

## useCallback

Se utilizó para memorizar funciones utilizadas por componentes y efectos.

Ejemplo:
* Carga de juegos desde la API.

## Custom Hook

### useGames

Hook personalizado que encapsula el acceso al contexto global de juegos.
Permite reutilizar la lógica de acceso al estado compartido en múltiples componentes.
