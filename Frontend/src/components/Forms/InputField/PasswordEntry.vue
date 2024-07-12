<template>
  <!-- THIS COMPONENT MUST BE GENERALIZED ON CUSTOM INPUT -->
  <div class="form-group">
    <label>Contraseña</label>
    <input type="password" id="password" v-model="password" placeholder="••••••••" maxlength="32" />
    <span class="icon-eye"></span>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const password = ref('')
</script>

<style>
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
</style>
