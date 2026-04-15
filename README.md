# 🍳 BetterCook

Aplicación web full-stack para búsqueda de recetas con autocompletado en tiempo real, renderizado dinámico y backend serverless para proteger credenciales.

## 🚀 Demo

👉 **Live:** https://recipe-app-beta-swart.vercel.app/


## ✨ Features destacadas

- 🔁 Arquitectura desacoplada (UI / lógica / API)
- ⚡ Debounce para optimización de peticiones
- 🧠 Manejo de estados (loading / error / data)
- 🔐 API protegida mediante backend serverless
- ❤️ Persistencia de favoritos con localStorage
  
## 🛠️ Tecnologías

- HTML, CSS, JavaScript (Vanilla)
- Fetch API + JSON
- Vercel (deploy + serverless functions)
- Spoonacular API

## 🏗️ Arquitectura

Frontend:
- `main.js` → lógica y eventos
- `UI.js` → renderizado
- `script.js` → llamadas a API interna

Backend (Vercel Functions):
- `/api/search`
- `/api/suggestions`
- `/api/recipe-details`

## 🔐 Seguridad

La API key no está expuesta en el cliente.
Se gestiona mediante variables de entorno en Vercel.

## 📸 Screenshots

### 🏠 Hero
<img width="1327" height="1051" alt="image" src="https://github.com/user-attachments/assets/fcf662ed-37fb-4b6a-83b9-3f095559b395" />

### 📋 Resultados
<img width="1207" height="1111" alt="image" src="https://github.com/user-attachments/assets/6416c6e1-ad4a-4271-82b7-62ef044cf58c" />

### 🍽️ Detalle de receta
<img width="1330" height="1129" alt="image" src="https://github.com/user-attachments/assets/c83ca18b-0098-44c3-b362-ac149919bab8" />

### ❤️ Favoritos
<img width="989" height="429" alt="image" src="https://github.com/user-attachments/assets/3406c544-6ee9-4955-8d56-af3988e519e9" />



## 📈 Mejoras futuras

- 📌 Sección de favoritos persistente en UI
- 🔎 Filtros avanzados (dietas, tiempo, ingredientes)
- 📄 Paginación de resultados
- ⚛️ Migración a React para escalabilidad

## 👨‍💻 Autor

Desarrollado por Andrei
