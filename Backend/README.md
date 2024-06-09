# Backend para theapistTrackApp

Este proyecto es el backend para theapistTrackApp la cual se encarga de ordenar los docuemntos de psicologos. 
Utiliza Node.js y Express para proporcionar una API REST que interactúa con una base de datos MongoDB, gestionando autenticación, manejo de archivos y operaciones CRUD para pacientes y médicos.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para fines de desarrollo y pruebas.

### Prerrequisitos

Necesitas tener instalado Node.js y npm en tu computadora. Opcionalmente, puedes usar Docker para contenerizar la aplicación.

### Instalación

Sigue estos pasos para iniciar el proyecto en tu máquina local:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TherapistTrack/therapistTrackApp.git

2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   
3. Copiar el archivo .env.example a .env y ajustar las variables de entorno necesarias.

### Ejecución
Para ejecutar la aplicación en un entorno de desarrollo, puedes utilizar Node.js o Docker Compose:

#### Usando Node.js: 

   ```bash
   npm start
   ```

#### Usando Docker Compose:

Para iniciar los servicios

   ```bash
   docker-compose up
   ```
Para detener y eliminar los contenedores creados

   ```bash
   docker-compose down -v
   ```
Para reconstruir los contenedores después de realizar cambios

   ```bash
   docker-compose build
   ```
   
## Uso de la API

La API permite realizar operaciones autenticadas relacionadas con la gestión de usuarios y pacientes. Las rutas principales incluyen:

### Autenticación
  ```bash
  POST /api/login
  Body:
  {
    "username": "ejemplo",
    "password": "password"
  }
  ```

### Ejemplo de Uso

Para ver ejemplos detallados de cómo interactuar con la API, consulta la sección de documentación de Swagger.

## Documentación de la API

Accede a la documentación interactiva de la API generada con Swagger visitando:

  ```bash
  http://localhost:3001/api-docs
  ```
Esta documentación proporciona una interfaz para probar todas las rutas disponibles y ver sus especificaciones.

### Construido con

- Node.js - El entorno de ejecución para JavaScript.
- Express - El framework web utilizado.
- Mongoose - ORM para MongoDB.
