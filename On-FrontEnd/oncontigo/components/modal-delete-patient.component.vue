<script >

import moment from "moment/moment.js";
import {PatientsService} from "../services/patients.service.js";
import {Patient} from "../model/patient.js";

export default {
  name:"patient-delete-modal",
  components: {},
  props:{
    visible:Boolean
  },
  data(){
    return{
      visible:true,
      patientsApi: new PatientsService(),
      patient: new Patient()
    }
  },
  created() {

    this.patientsApi.getById(1)
        .then(response =>{
          this.patient = response.data;
        })
        .catch(e=> this.errors.push(e));
  },
}
</script>
<template>
  <pv-dialog v-model:visible="visible" modal class="modalP-container" header="Delete Patient" :closable="false">
    <template #header class="modalP" >
      <div class="modal-header">
              <label class="modalP-title">¿Desea eliminar este Paciente?</label>
      </div>
    </template>

          <div class="modal-body">

                  <div class="main-row text-left">
                    <div class="col text-bold">Nombre completo:</div>
                    <div class="col">{{patient.name}}</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">DNI:</div>
                    <div class="col">{{patient.dni}}</div>
                  </div>
          </div>
    <template #footer >
      <button class="modalP-button center" @click="$emit('close')">Cancelar</button>
      <button class="modalP-button  center" @click="$emit('close')">Ok</button>
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  max-width:335px;

}
.modal-header{
  margin-left: auto;
  margin-right: auto;
}
.modal-body {
  margin: 0 12%;
}
.modal-enter .modalP-container,
.modal-leave-active .modalP-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>