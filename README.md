# 🎮 GameTracker

GameTracker es una aplicación Full Stack desarrollada para gestionar una colección personal de videojuegos.

Permite registrar juegos, consultar el catálogo, actualizar su estado de progreso, eliminarlos y visualizar estadísticas generales de la colección.

---

# 🚀 Demo

### Frontend

**URL de producción (Vercel):**

https://gametracker-kappa.vercel.app/

### Backend

**API desplegada en Render:**

https://gametracker-api-jehr.onrender.com

---

# 📋 Funcionalidades

* Crear videojuegos
* Visualizar la colección completa
* Actualizar el estado de un juego
* Eliminar juegos
* Consultar estadísticas
* Navegación SPA mediante React Router
* Gestión global del estado con Context API
* Comunicación con API REST

---

# 🛠️ Tecnologías utilizadas

## Frontend

* React
* TypeScript
* Vite
* React Router DOM
* Context API
* Custom Hooks

## Backend

* Node.js
* Express
* CORS
* Dotenv

## Control de versiones

* Git
* GitHub

## Despliegue

* Vercel
* Render

---

# 🏗️ Arquitectura

## Frontend

```text
client/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── types/
│   └── utils/
```

## Backend

```text
server/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── config/
│   └── index.js
```

La aplicación sigue una arquitectura por capas:

```text
Frontend
   ↓
API Client
   ↓
Routes
   ↓
Controllers
   ↓
Services
```

---

# 🔌 API REST

## Obtener juegos

```http
GET /api/v1/games
```

## Crear juego

```http
POST /api/v1/games
```

Body:

```json
{
  "title": "Elden Ring",
  "platform": "PC",
  "status": "JUGANDO"
}
```

## Actualizar estado

```http
PATCH /api/v1/games/:id
```

## Eliminar juego

```http
DELETE /api/v1/games/:id
```

---

# ⚙️ Instalación local

## 1. Clonar repositorio

```bash
git clone https://github.com/Piscisgt/gametracker.git
```

```bash
cd gametracker
```

---

## 2. Backend

```bash
cd server
npm install
```

Ejecutar:

```bash
npm run dev
```

Servidor:

```text
http://localhost:3000
```

---

## 3. Frontend

```bash
cd client
npm install
```

Ejecutar:

```bash
npm run dev
```

Aplicación:

```text
http://localhost:5173
```

---

# 🧪 Testing

Se realizaron pruebas sobre:

* Navegación entre páginas
* Creación de juegos
* Consulta de juegos
* Actualización de estado
* Eliminación de juegos
* Estadísticas
* Comunicación frontend-backend
* Despliegue en producción

---

# 📚 Documentación

La documentación completa se encuentra en la carpeta:

```text
docs/
```

Incluye:

* Gestión del proyecto
* Diseño y arquitectura
* Componentes
* Hooks
* Context API
* Routing
* Formularios
* API
* Testing
* Deployment
* Retrospectiva

---

# 👨‍💻 Autor

**Enzo Marcelo Grey Talledo**

Proyecto desarrollado como práctica de Desarrollo de Aplicaciones Multiplataforma (DAM).

---

# 📄 Licencia

Proyecto de carácter educativo.
