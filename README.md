# UnaHur Anti-Social Net - FrontEnd

## Integrantes

- Carolina Victoria Gonzalez Pisarello
- Juan Manuel Solis Diaz

---

# Descripción

UnaHur Anti-Social Net es una aplicación web desarrollada en **React + TypeScript** que simula una red social.

La aplicación consume la API desarrollada en la materia **Estrategia de Persistencia** y permite a los usuarios registrarse, iniciar sesión, crear publicaciones, agregar imágenes y etiquetas, comentar publicaciones y visualizar su perfil.

---

# Tecnologías utilizadas

## FrontEnd

- React 19
- TypeScript
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- DaisyUI
- Lucide React

## BackEnd

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- CORS

---

# Funcionalidades

## Usuarios

- Registro de usuarios
- Inicio de sesión
- Persistencia de sesión mediante LocalStorage
- Cierre de sesión

## Publicaciones

- Visualizar publicaciones
- Crear publicaciones
- Agregar imágenes
- Agregar etiquetas (Tags)
- Editar publicaciones
- Eliminar publicaciones
- Compartir publicaciones
- Ver publicación completa

## Comentarios

- Visualizar comentarios
- Crear comentarios
- Cantidad de comentarios por publicación

## Perfil

- Visualizar información del usuario
- Visualizar publicaciones propias

## Extras

- Buscador de publicaciones
- Avatares personalizados
- Tiempo relativo de publicación
- Interfaz responsive
- Diseño utilizando DaisyUI
- Menú contextual para publicaciones

---

# Instalación

## Backend

### 1. Clonar el repositorio


git clone https://github.com/EP-UnaHur-2026C1/anti-social-documental-tp-somo-lo-que-somo


Ingresar al proyecto:

cd anti-social-documental-tp-somo-lo-que-somo


### 2. Instalar dependencias
npm install


### 3. Levantar MongoDB con Docker

Desde la carpeta del proyecto ejecutar:


docker compose up -d


Verificar que el contenedor de MongoDB se encuentre en ejecución.

### 4. Ejecutar el BackEnd

npm run dev


El servidor quedará disponible en:


http://localhost:3000


---

## FrontEnd

### 1. Clonar el repositorio


git clone https://github.com/Manuhead98/UnaHur-Anti-Social-Net


cd UnaHur-Anti-Social-Net


### 2. Instalar dependencias


npm install

### 3. Ejecutar la aplicación


npm run dev


La aplicación estará disponible en:

http://localhost:5173


---

# Orden de ejecución

Para utilizar correctamente la aplicación se recomienda seguir el siguiente orden:

1. Levantar MongoDB utilizando Docker.
2. Ejecutar el BackEnd (`npm run dev`).
3. Ejecutar el FrontEnd (`npm run dev`).
4. Abrir la aplicación en:

```
http://localhost:5173
```

---

# API utilizada

El FrontEnd consume la API REST desarrollada para la materia **Estrategia de Persistencia**, ejecutándose localmente en:

```
http://localhost:3000
```

Principales endpoints utilizados:

### Usuarios

- GET /users
- POST /users

### Publicaciones

- GET /posts
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

### Comentarios

- GET /comments/post/:postId
- POST /comments

### Tags

- GET /tags

