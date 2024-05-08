<div align = "center">
  <img src="./TherapistTrackLogo.png" width="370px"><h1 align="center"> 
    <h5 align="center"> <i style="color:grey;"> 
   A medical records storage system</i> </h5>
</div>

An application specialized for storing psycolocial patient records. This repo containt all the process we went to trought to make it.

<div align = "center">
<h5 align = "center">Build with</h5>
<img align="center" alt="Java" width="40px" style="padding-right:20px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" />
<img align="center" alt="Java" width="40px" style="padding-right:20px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
<img align="center" alt="Java" width="40px" style="padding-right:20px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
</div>

## The Design Process

[🔴 Phase 1](https://github.com/DanielRasho/TherapistTrack/tree/main/PreDesignFiles/phase1) - Understanding the client problems.

[🔴 Phase 2](https://github.com/DanielRasho/TherapistTrack/tree/main/PreDesignFiles/phase2) - Understangind the business and Ideating.

            [> Non functional requirements](https://github.com/DanielRasho/TherapistTrack/tree/main/PreDesignFiles/phase2/non_functional_requisites_logs)

[🔴 Phase 3](https://github.com/DanielRasho/TherapistTrack/tree/main/PreDesignFiles/phase3) - First Database an Prototipes

## Getting Started

For setting up the project to start developing follow the steps below:

### 📦 Setup Dependencies

- **Installing dependencies**
  
  ```bash
  npm install
  ```

- **Running different services**
  
  ```bash
  npm run backend:start    <- Starts the backend service
  npm run frontend:dev     <- Starts web server running frontend
  npm run frontend:build   <- Compiles Vue project
  npm run frontend:preview <- Preview compiled Vue project
  ```

### 🐋 Setup Docker containers

Alternatively, the project is configure to run the backend and database in docker containers and is the <u>recomended way to run and test this services</u> rather than use `npm scripts`. You should have **Docker compose** installed, then just run:



- **Starting containers**
  
  ```bash
  docker compose up -d
  ```

- **Stopping containers**
  
  ```bash
  docker compose down
  ```

- **Stopping and deleting volumes**
  
  ```bash
  docker compose down -v 
  ```

## Contributors

<div align="center"> 
<a href="https://github.com/TherapistTrack/therapistTrackApp/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=TherapistTrack/therapistTrackApp" />
</a>
</div>
