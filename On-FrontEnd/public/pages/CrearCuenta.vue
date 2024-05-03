<template>
  <div class="card">
    <h1>Crear una cuenta</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Nombre" >
      <input type="password" placeholder="Contraseña" >
      <input type="password" placeholder="Confirmar contraseña" >
      <input type="email" placeholder="Email" >
      <input type="tel" placeholder="Teléfono" >
      <input type="text" placeholder="DNI" >
      <input type="number" placeholder="Edad" >
      <div>
        <input type="radio" id="paciente" name="role" >
        <label for="paciente">Paciente</label>
        <input type="radio" id="medico" name="role" >
        <label for="medico">Médico</label>
      </div>
      <button type="submit" @click="onSubmit">Aceptar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CrearCuenta',
  methods: {
    onSubmit() {
      this.$emit('formSubmitted');
      this.$router.push({ path: '/iniciar-sesion' })
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

</style>