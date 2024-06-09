<script >

export default {
  name:"doctor-modal",
  components: {},
  props:{
    visible:Boolean
  },
  data(){
    return{
      visible:true
    }
  },
}
</script>

<template>
  <pv-dialog v-model:visible="visible" modal class="modalD-container" header="Doctor Details" :closable="false">
    <template #header class="modalP" >
      <div class="modal-header" >
              <label class="modalD-title">Detalles de mi Doctor</label>
      </div>
    </template>

          <div class="modal-body">
              <div class="main-row ">
                <div class="col" style="margin-top: 10%;">
                  <div class="main-row text-left">
                    <div class="col text-bold">Nombre completo:</div>
                    <div class="col">Jane Doe</div>
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
                    <div class="col text-bold">DNI:</div>
                    <div class="col">73805906</div>
                  </div>
                </div>
                <div class="col ">
                  <div class="main-row center">
                  <img class="roundedD-img" alt="img-avatar" src=""/>
                    </div>
                  <div class="main-row chatD-button">
                    <div class="col text-right text-bold">CHAT</div>
                    <div class="col text-left"><i class="pi pi-comment" ></i></div>
                  </div>
                </div>
              </div>
          </div>

    <template #footer >
  <pv-button class="modalD-button center" @click="$emit('close')">
    Aceptar
  </pv-button>
    </template>
  </pv-dialog>
</template>

<style scoped>
.main-row{
  display:flex;
}
.col{
  flex-grow:1;
  margin:0px 2px;
}
.roundedD-img {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  border: 5px solid #ffffff;
}
.chatD-button{
  background: #FFDCE5;
}
.modalD-title{
  font-family: League Spartan;
  font-size: 25px;
  font-weight:bold;
  line-height: 10px;
  text-align: center;
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
.modalD-container {
  width: 70%;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 15px !important;
  background-color: #FF94B0;
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

.modalD-button {
  background-color: #4A547F;
  color: #FFFFFF;
  min-width:98px;
}

.modal-enter .modalD-container,
.modal-leave-active .modalD-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>