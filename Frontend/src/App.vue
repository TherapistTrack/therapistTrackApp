<template>
  <div id="app">
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
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

/* Intentar no usar etiquetas HTML en CSS, mejor usar CLASES CUSTOM.
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
*/
</style>
