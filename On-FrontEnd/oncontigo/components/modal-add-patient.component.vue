<script >

export default {
  name:"patient-add-modal",
  components: {},
  props:{
    visible:Boolean
  },
  methods:{
  },
  data(){
    return{
      visible:true
    }
  },
}
</script>
<template >
    <pv-dialog v-model:visible="visible" modal class="modalPD-container" header="Add Patient" :closable="false">
          <template #header class="modalP" >
          <div class="modal-header" >
              <label class="modalP-title">Agregar Paciente</label>
          </div>
          </template>
          <div class="modal-body text-left">
                    <div class="text-bold text-left">Ingrese el DNI del paciente:</div>
                    <div class="dni-input text-left"><input  class="flex-auto" autocomplete="off" ></div>
          </div>
          <template #footer >
                <pv-button class="modalP-button center" @click="$emit('close')" autofocus >Cancelar</pv-button>
                <pv-button class="modalP-button center" @click="$emit('close')" autofocus >Ok</pv-button>
          </template>

    </pv-dialog>
</template>

<style scoped>
.main-row{
  display:flex;
  margin-left: auto;
  margin-right: auto;
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
  width: 100%;
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
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  max-width:189px;
}
.modal-header{
  margin-left: auto;
  margin-right: auto;
}
.modal-body {
  margin: 0 15%;
  margin-top:2% !important;
}


</style>