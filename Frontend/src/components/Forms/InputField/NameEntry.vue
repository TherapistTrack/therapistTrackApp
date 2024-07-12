<template>
  <!-- THIS COMPONENT MUST BE GENERALIZED ON CUSTOM INPUT -->
  <div class="form-group">
    <label>Nombres</label>
    <input type="text" id="name" v-model="name" placeholder="Escribe tu nombre..." maxlength="64" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
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
</style>
