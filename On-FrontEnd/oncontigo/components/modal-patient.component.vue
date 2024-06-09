<script >

import {PatientsService} from "../services/patients.service.js";
import {Patient} from "../model/patient.js";
import moment from "moment";

export default {
  name:"patient-modal",
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
          this.patient.lastAppointmet = moment(this.patient.lastAppointmet).format('DD/MM/YY')
          this.patient.nextAppoinment = moment(this.patient.nextAppoinment).format('DD/MM/YY')
        })
        .catch(e=> this.errors.push(e));
  },
}
</script>

<template>
  <pv-dialog v-model:visible="visible" modal class="modalPD-container" header= "Patient Details" :closable="false">

    <template #header class="modalP" >
      <div class="modal-header" >
              <label class="modalP-title">Detalles de mi Paciente</label>
      </div>
    </template>

          <div class="modal-body">
              <div class="main-row ">
                <div class="col" style="margin-top: 5%;">
                  <div class="main-row text-left">
                    <div class="col text-bold">Nombre completo:</div>
                    <div class="col">{{patient.name}}</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">DNI:</div>
                    <div class="col">{{patient.dni}}</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Última Cita:</div>
                    <div class="col"> {{patient.lastAppointmet}}</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Próxima Cita:</div>
                    <div class="col">{{patient.nextAppoinment}}</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Email:</div>
                    <div class="col">{{patient.email}}</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold">Teléfono:</div>
                    <div class="col"> 999 999 999</div>
                  </div>
                  <div class="main-row text-left">
                    <div class="col text-bold" style="width:186px">Diagnóstico:</div>
                    <div class="col diagnostic-input relative">
                      <i class="pi pi-pencil modalP-button-ic absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" style="max-width:35px"/>
                      <pv-input-text value="Disease" class="input-disease flex-auto" autocomplete="off" />
</div>
                  </div>
                </div>
                <div class="col vertical-align">
                  <div class="main-row center">
                    <img class="roundedP-img" alt="img-avatar" src="../../src/assets/images/userplaceholder.png"/>
                  </div>
                </div>
              </div>
          </div>

    <template #footer >
                <pv-button class="modalP-button center" @click="$emit('close')">
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
.roundedP-img {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  border: 5px solid #ffffff;
}
.chatP-button{
  margin-top:10px;
  background: #D2DAFA;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
}
.p-inputtext{
  padding:1px;
  padding-left:5px;
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
  text-align: center;
}
.modalP-container {
  width: 80%;
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
.modal-header{
  margin-left: auto;
  margin-right: auto;
}
.modal-body {
  margin: 20px 0;
}

.modalP-button {
  background-color: #4A547F;
  color: #FFFFFF;
  min-width:98px;
}
.modalP-button-ic{
  background-color: #4A547F;
  color: #FFFFFF;
  height: 32px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  top:17px !important;
}
.modal-enter .modalP-container,
.modal-leave-active .modalP-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.vertical-align{
  margin-top: auto;
  margin-bottom: auto;
}
@media screen and (max-width: 1250px) {
  .roundedP-img {
    height: 200px;
    width: 200px;
    padding-left: 0;
    padding-right: 0;
  }
  .chatP-button{
    height: 40px;
    width: 200px;
  }
}
@media screen and (max-width: 1280px) {
  .roundedP-img {
    height: 200px;
    width: 200px;
    padding-left: 0;
    padding-right: 0;
  }
  .chatP-button{
    height: 40px;
    width: 250px;
  }
  .input-disease{
    width: 250px;
  }
}
</style>