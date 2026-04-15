# 🍳 BetterCook

Aplicación web para buscar recetas, ver sugerencias en tiempo real y consultar detalles completos de cada receta.

## 🚀 Demo
👉 [https://tu-app.vercel.app](https://recipe-app-beta-swart.vercel.app/)

## 🧠 Funcionalidades

- 🔍 Búsqueda de recetas por nombre
- ⚡ Autocompletado con debounce
- 📋 Listado de resultados en formato grid
- 👆 Click en receta → detalles completos
- ⚠️ Manejo de errores en UI
- ⏳ Indicador de carga
- 🔐 API protegida mediante Vercel Functions

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

Hero
<img width="1327" height="1051" alt="image" src="https://github.com/user-attachments/assets/fcf662ed-37fb-4b6a-83b9-3f095559b395" />

Grid resultados
<img width="1207" height="1111" alt="image" src="https://github.com/user-attachments/assets/6416c6e1-ad4a-4271-82b7-62ef044cf58c" />

Detalle de receta
<img width="1290" height="1092" alt="image" src="https://github.com/user-attachments/assets/4b483fe3-dbbd-4b9a-b462-8f2234c42de2" />


## 📈 Mejoras futuras

- Guardar recetas favoritas (localStorage)
- Filtros (vegano, keto, etc.)
- Migración a React
