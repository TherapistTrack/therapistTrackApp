<template>
  <div class="login-form">
    <h1>Login</h1>
    <div class="form-group">
      <label for="name">Nombres</label>
      <input
        type="text"
        id="name"
        v-model="nombre"
        placeholder="Escribe tu nombre..."
        maxlength="64"
      />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="••••••••"
        maxlength="32"
      />
      <span class="icon-eye"></span>
    </div>
    <button @click="ingresar">Ingresar →</button>
    <p v-if="mensajeError" class="error-message">{{ mensajeError }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const nombre = ref('')
    const password = ref('')
    const mensajeError = ref('')
    const loading = ref(false)

    async function ingresar() {
      mensajeError.value = ''
      if (nombre.value === '' || password.value === '') {
        mensajeError.value = 'Por favor, completa todos los campos.'
      } else {
        try {
          loading.value = true
          const response = await fetch('https://tu-api.com/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: nombre.value,
              password: password.value
            })
          })

          if (!response.ok) {
            throw new Error('Error en la solicitud de red')
          }

          const data = await response.json()

          if (data.success) {
            const token = data.token
            localStorage.setItem('token', token)
          } else {
            mensajeError.value = 'Nombre de usuario o contraseña incorrectos.'
          }
        } catch (error) {
          mensajeError.value = 'Error al iniciar sesión: ' + error.message
        } finally {
          loading.value = false
        }
      }
    }

    return { nombre, password, mensajeError, ingresar }
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #edece8;
  margin: 0%;
  padding: 0%;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.804);
  width: 390px;
  display: flex;
  flex-direction: column;
  text-align: left; /* Asegura la alineación a la izquierda */
}

.login-form h1 {
  text-align: center;
  color: black;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: black;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-sizing: border-box;
}

.icon-eye {
  position: absolute;
  cursor: pointer;
  right: 1rem;
  top: 1rem;
}

button {
  background: #f9bb42;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  align-self: flex-end;
  transition: background-color 0.2s;
}

button:hover {
  background: #ffcd6c;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>
