<template>
  <div class="create-user-container">
    <div class="create-user-form">
      <h2>Nuevo Usuario</h2>
      <form @submit.prevent="createUser">
        <div class="form-group">
          <label for="firstName">Nombres</label>
          <input
            id="firstName"
            v-model="user.firstName"
            type="text"
            placeholder="Escribe tu nombre..."
          />
        </div>
        <div class="form-group">
          <label for="lastName">Apellidos</label>
          <input
            id="lastName"
            v-model="user.lastName"
            type="text"
            placeholder="Escribe tus apellidos"
          />
        </div>
        <div class="form-group">
          <label for="phone">Teléfonos</label>
          <input
            id="phone"
            v-model="user.phone"
            type="text"
            placeholder="Escribe tu número de teléfono"
          />
        </div>
        <div class="form-group">
          <label for="role">Rol</label>
          <select id="role" v-model="user.role">
            <option disabled value="">Seleccione una opción</option>
            <option>Doctor</option>
            <option>Asistente</option>
            <option>Admin</option>
          </select>
        </div>

        <!-- Campos condicionales para "Doctor" -->
        <template v-if="user.role === 'Doctor'">
          <div class="form-group">
            <label for="specialty">No. Colegiado</label>
            <input
              id="specialty"
              v-model="user.specialty"
              type="text"
              placeholder="Escribe tu No. de Colegiado"
            />
          </div>
          <div class="form-group">
            <label for="specialty">Especialidad</label>
            <input
              id="specialty"
              v-model="user.specialty"
              type="text"
              placeholder="Escribe tu especialidad"
            />
          </div>
          <div class="form-group">
            <label for="email">Correo</label>
            <input id="email" v-model="user.email" type="email" placeholder="correo@ejemplo.com" />
          </div>
        </template>

        <!-- Campos condicionales para "Asistente" -->
        <template v-if="user.role === 'Asistente'">
          <div class="form-group">
            <label for="email">Correo</label>
            <input id="email" v-model="user.email" type="email" placeholder="correo@ejemplo.com" />
          </div>
          <div class="form-group">
            <label for="startDate">Fecha inicio</label>
            <input id="startDate" v-model="user.startDate" type="date" />
          </div>
          <div class="form-group">
            <label for="startDate">Fecha Final </label>
            <input id="startDate" v-model="user.startDate" type="date" />
          </div>
        </template>

        <div class="button-container">
          <button type="submit" :class="{ active: isFormValid }" :disabled="!isFormValid">
            Crear
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const user = ref({
      firstName: '',
      lastName: '',
      phone: '',
      role: '',
      membershipNumber: '',
      specialty: '',
      email: '',
      startDate: '',
      endDate: ''
    })

    // Computed property para la validación
    const isFormValid = computed(() => {
      // Validaciones básicas
      const basicInfoValid =
        user.value.firstName && user.value.lastName && user.value.phone && user.value.role
      let roleSpecificValid = true

      // Validaciones específicas por rol
      if (user.value.role === 'Doctor') {
        roleSpecificValid = user.value.membershipNumber && user.value.specialty && user.value.email
      } else if (user.value.role === 'Asistente') {
        roleSpecificValid = user.value.email && user.value.startDate && user.value.endDate
      }

      return basicInfoValid && roleSpecificValid
    })

    const createUser = () => {
      if (isFormValid.value) {
        console.log('Creating user:', user.value)
        // Aquí implementarías la lógica para enviar los datos al API
      } else {
        console.error('Form is invalid')
      }
    }

    return { user, createUser, isFormValid }
  }
}
</script>

<style scoped>
.create-user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.create-user-form {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.button-container button {
  padding: 12px;
  background-color: #d3d3d3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 20%;
  margin-top: 20px;
}

.button-container button.active {
  background-color: #068e65;
}

button:hover {
  background-color: #1bb889;
}

.button-container button:disabled {
  cursor: not-allowed;
}
</style>
