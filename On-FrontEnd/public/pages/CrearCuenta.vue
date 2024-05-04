<template>
  <transition name="add-account" class="bg-account">
    <div>
  <div class="card">
    <h1>Crear una cuenta</h1>
    <form @submit.prevent="onSubmit" class="account-frm">
      <div class="main-row text-left">
        <div class="col">
      <div class="text-bold text-left">Nombre:</div>
      </div>
      </div>
      <div class="main-row text-left">
        <div class="col">
        <input type="text" class="flex-auto input-frm" style="width:100% !important" placeholder="Nombre" >
      </div>
      </div>
      <div class="main-row text-left">
        <div class="col">
          <div class="text-bold">Contraseña:</div>
          <input type="password" class="flex-auto vertical-space input-frm" placeholder="Contraseña">
        </div>
        <div class="col">
          <div class="text-bold">Confirmar contraseña:</div>
          <input type="password" class="flex-auto vertical-space input-frm" placeholder="Confirmar contraseña">
        </div>
      </div>
      <div class="main-row text-left">
        <div class="col">
          <div class="text-bold">Email:</div>
          <input type="email" class="flex-auto input-frm" placeholder="Email">
        </div>
        <div class="col">
          <div class="text-bold">Teléfono:</div>
          <input type="tel" class="flex-auto input-frm" placeholder="Teléfono">
        </div>
      </div>

      <div>
        <div class="main-row text-left">
          <div class="col">
            <div class="text-bold">DNI:</div>
            <input type="text" class="flex-auto input-frm" placeholder="DNI">
          </div>
          <div class="col">
            <div class="text-bold">Edad:</div>
            <input type="number" class="flex-auto input-frm" placeholder="Edad">
          </div>
        </div>
        <div class="main-row text-left ">
          <div class="col center text-left">
            <input type="radio" id="paciente" name="role" style="margin-left:70%">
            <label for="paciente">Paciente</label>
          </div>
          <div class="col center">
            <input type="radio" id="medico" name="role" >
            <label for="medico">Médico</label>
          </div>
        </div>


      </div>
      <button class="button-account account-frm" type="submit" @click="onSubmit">Aceptar</button>
    </form>
  </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CrearCuenta',
  methods: {
    onSubmit() {
      this.$emit('formSubmitted');
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
.main-row{
  display:flex;
}
.col{
  flex-grow:1;
  margin:0px 2px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.text-bold{
  font-weight:bold;
}
.text-left{
  text-align: left;
}
.account-frm{
  margin-top:15px;
}
.vertical-space{
  margin-top:10px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFBBCD;
  width:  600px;
  height:  550px;
  margin: 0 auto ;
  margin-top: 2%;
  border-radius: 15px !important;
  border-radius: 2px;
}
.bg-account{
  background-image:url('@/assets/images/bg-login.png') !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9998;
  left: 0;
  display: table;
  transition: opacity 0.3s ease;
}
.input-frm{
  width: 250px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
  text-indent: 5px;
}
.button-account {
  background-color: #FF94B0;
  color: #FFFFFF;
  min-width:98px;
  padding: 8px;
  width: 130px;
  border: 1px solid #aaa;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top:30px;
}
form {
  display: flex;
  flex-direction: column;
}
</style>