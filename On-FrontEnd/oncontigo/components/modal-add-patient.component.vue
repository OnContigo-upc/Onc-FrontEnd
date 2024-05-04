<script >

export default {
  name:"patient-add-modal",
  components: {},
  props:{
  }
}
</script>
<template>
  <transition name="modalDeleteP" >
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modalP-container">

          <div class="modal-header">
            <slot name="header">
              <label class="modalP-title">Agregar Paciente</label>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body  text-left">
                    <div class="text-bold text-left">Ingrese el DNI del paciente:</div>
                    <div class="dni-input text-left"><input  class="flex-auto" autocomplete="off" ></div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div class="main-row text-left">
                <div class="col center"><button class="modalP-button " @click="$emit('close')">Cancelar</button></div>
                <div class="col center"><button class="modalP-button  " @click="$emit('close')">Ok</button></div>
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
  margin-right:28%;
  margin-left:28%;

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
.dni-input input{
  width: 250px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
  text-indent: 32px;
}
.modalP-title{
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
  width: 40%;
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
  margin: 0 25%;
  margin-top:2% !important;
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