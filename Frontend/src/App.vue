<template>
  <div id="app">
    <!-- La condición v-if se puede remover si no necesitas mostrar ningún otro enlace en la barra de navegación -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
nav {
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

nav a.router-link-active {
  color: #42b983;
}
</style>
