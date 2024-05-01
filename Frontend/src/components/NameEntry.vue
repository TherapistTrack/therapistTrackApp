<template>
    <div class="form-group">
        <label>Nombres</label>
        <input type="text" id="name" v-model="nombre" placeholder="Escribe tu nombre..." maxlength="64">
      </div>
</template>

<style>
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: .5rem;
  color: black; 
}

.form-group input {
  width: 100%;
  padding: .75rem;
  border: 1px solid #ddd;
  border-radius: .5rem;
  box-sizing: border-box;
}
</style>