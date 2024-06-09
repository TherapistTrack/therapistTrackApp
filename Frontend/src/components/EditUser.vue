<template>
  <div class="edit-user-container">
    <div class="edit-user-form">
      <h2>Editar Usuario</h2>
      <form @submit.prevent="updateUser">
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
        <template v-if="user.role === 'Doctor'">
          <div class="form-group">
            <label for="membershipNumber">No. Colegiado</label>
            <input
              id="membershipNumber"
              v-model="user.membershipNumber"
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
            <label for="endDate">Fecha Final</label>
            <input id="endDate" v-model="user.endDate" type="date" />
          </div>
        </template>
        <div class="button-container">
          <button type="submit" :class="{ active: isFormValid }" :disabled="!isFormValid">
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'EditUser',
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

    const isFormValid = computed(() => {
      const basicInfoValid =
        user.value.firstName && user.value.lastName && user.value.phone && user.value.role
      let roleSpecificValid = true
      if (user.value.role === 'Doctor') {
        roleSpecificValid = user.value.membershipNumber && user.value.specialty && user.value.email
      } else if (user.value.role === 'Asistente') {
        roleSpecificValid = user.value.email && user.value.startDate && user.value.endDate
      }
      return basicInfoValid && roleSpecificValid
    })

    const updateUser = async () => {
      if (isFormValid.value) {
        try {
          const response = await fetch('http://localhost:3001/user/update', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: user.value.email,
              name: user.value.firstName,
              lastName: user.value.lastName,
              phones: [user.value.phone],
              collegiateNumber: user.value.membershipNumber,
              specialty: user.value.specialty,
              mails: [user.value.email],
              startDate: user.value.startDate,
              endDate: user.value.endDate
            })
          })

          if (!response.ok) {
            throw new Error('Error al actualizar el usuario')
          }

          const data = await response.json()
          console.log('Usuario actualizado exitosamente:', data)
        } catch (error) {
          console.error('Error:', error)
        }
      } else {
        console.error('Formulario inválido')
      }
    }

    return { user, updateUser, isFormValid }
  }
}
</script>

<style scoped>
.edit-user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
.edit-user-form {
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

@media (max-width: 768px) {
  .edit-user-form {
    width: 90%;
    padding: 1rem;
  }

  .button-container button {
    width: 100%;
  }
}
</style>
