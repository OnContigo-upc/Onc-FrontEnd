<script >

export default {
  name:"patient-modal",
  components: {},
  props:{
  }
}
</script>

<template>
  <transition name="modalP" >
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modalP-container">

          <div class="modal-header">
            <slot name="header">
              <label class="modalP-title">Detalles de mi Paciente</label>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div class="main-row ">
                <div class="col" style="margin-top: 5%;">
                  <div class="main-row text-left">
                    <div class="col text-bold">Nombre completo:</div>
                    <div class="col">Jane Doe</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">DNI:</div>
                    <div class="col">73805906</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Última Cita:</div>
                    <div class="col">dd/mm/yy</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Próxima Cita:</div>
                    <div class="col">dd/mm/yy</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Email:</div>
                    <div class="col">example@gmail.com</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Teléfono:</div>
                    <div class="col">999 999 999</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Diagnóstico:</div>
                    <div class="col diagnostic-input">
                      <span class="pi pi-pencil modalP-button" style="font-size: 2em; min-width:20px !important;"/>
                      <input value="Disease" class="flex-auto" autocomplete="off" >
</div>
                  </div>
                </div>
                <div class="col ">
                  <div class="main-row center">
                    <img class="roundedP-img" alt="img-avatar" src=""/>
                  </div>
                  <div class="main-row chatP-button">
                    <div class="col text-right text-bold">CHAT</div>
                    <div class="col text-left"><i class="pi pi-comment" ></i></div>
                  </div>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <div>
                <button class="modalP-button" @click="$emit('close')">
                  Aceptar
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.main-row{
  display:flex;
}
.col{
  flex-grow:1;
  margin:0px 2px;
}
.roundedP-img {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  border: 5px solid #ffffff;
}
.chatP-button{
  background: #D2DAFA;
}
.modalP-title{
  font-family: League Spartan;
  font-size: 25px;
  font-weight:bold;
  line-height: 10px;
  text-align: center;
}
.diagnostic-input{
  position: relative;
  color: #aaa;
  font-size: 16px;
  display: inline-block;
}
.diagnostic-input input {
  width: 250px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
  text-indent: 32px;
}
.diagnostic-input .pi-pencil {
  position: absolute;
  top: 10px;
  left: 10px;
  left: auto; right: 10px;
}
.text-bold{
  font-weight:bold;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modalP-container {
  width: 70%;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 15px !important;
  background-color: #95A8FF;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modalP-button {
  background-color: #4A547F;
  color: #FFFFFF;
  min-width:98px;
}

.modal-enter .modalP-container,
.modal-leave-active .modalP-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>