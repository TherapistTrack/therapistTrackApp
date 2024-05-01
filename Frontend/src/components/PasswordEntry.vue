<template> 
    <div class="form-group">
        <label >Contraseña</label>
        <input type="password" id="password" v-model="password" placeholder="••••••••" maxlength="32"/>
        <span class="icon-eye"></span>
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

.icon-eye {
  position: absolute;
  cursor: pointer;
  right: 1rem;
  top: 1rem; 
}

</style>