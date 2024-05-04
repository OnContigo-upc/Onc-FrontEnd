<template >
  <transition name="login" class="bg-login">

  <div>
  <div class="card">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="onSubmit" class="login-frm">
      <div class="text-bold text-left vertical-space">Email:</div>
      <input type="email" placeholder="Email" class="flex-auto vertical-space" autocomplete="off">
      <div class="text-bold text-left vertical-space">Contraseña:</div>
      <input type="password" placeholder="Contraseña" class="vertical-space flex-auto" autocomplete="off">
      <button class="button-login login-frm" type="submit" @click="onSubmit" >Iniciar sesión</button>
    </form>
  </div>
  </div>
  </transition>

</template>

<script>
export default {
  name: 'IniciarSesion',
  methods: {
    onSubmit() {
      this.$router.push({ path: '/dashboard-doctor/1' });
    }
  }
}
</script>

<style scoped>
.text-bold{
  font-weight:bold;
}
.text-left{
  text-align: left;
}
.login-frm{
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
  width:  400px;
  height:  350px;
  margin: 0 auto ;
  margin-top: 8%;
  border-radius: 15px !important;
  border-radius: 2px;

}
.bg-login{
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
input{
  width: 250px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
  text-indent: 5px;
}
.button-login {
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