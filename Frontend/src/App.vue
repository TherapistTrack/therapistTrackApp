<template>
  <div class="login-form">
    <h1><b>Login</b></h1>
    <NameEntry />
    <PasswordEntry />
    <button @click="ingresar">Ingresar →</button>
    <p v-if="mensajeError" class="error-message">{{ mensajeError }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NameEntry from './components/NameEntry.vue'
import PasswordEntry from './components/PasswordEntry.vue'

const nombre = ref('');
const password = ref('');
const mensajeError = ref('');
const loading = ref(false);

async function ingresar() {
  mensajeError.value = '';
  if (nombre.value === '' || password.value === '') {
    mensajeError.value = 'Por favor, completa todos los campos.';
    return;
  } else {
    try {
      loading.value = true;
      const response = await fetch('https://tu-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: nombre.value,
          password: password.value
        })
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de red');
      }

      const data = await response.json();

      if (data.success) {
        const token = data.token;
        localStorage.setItem('token', token);

      } else {
        mensajeError.value = 'Nombre de usuario o contraseña incorrectos.';
      }
    } catch (error) {
      mensajeError.value = 'Error al iniciar sesión: ' + error.message;
    } finally {
      loading.value = false;
    }
  }


}
</script>

<style>
body {
  font-family: 'Motiva Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #EDECE8;
  margin: 0%;
  padding: 0%;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.247);
  width: 390px;
  display: flex;
  flex-direction: column;
}

.login-form h1 {
  text-align: center;
  color: black;
  margin-bottom: 2rem;
}

button {
  background: #F9BB42;
  color: white;
  border: none;
  padding: .75rem 1.5rem;
  border-radius: .5rem;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  align-self: flex-end;
  transition: background-color 0.2s;
}

button:hover {

  background: #FFCD6C;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>