<template>
  <div class="card">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="onSubmit">
      <input type="email" placeholder="Email" >
      <input type="password" placeholder="Contraseña" >
      <button type="submit" @click="onSubmit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'IniciarSesion',
  methods: {
    onSubmit() {
      this.$router.push({ path: '/dashboard' });
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFBBCD;
  width:  400px;
  height:  400px;
}
form {
  display: flex;
  flex-direction: column;
}
</style>