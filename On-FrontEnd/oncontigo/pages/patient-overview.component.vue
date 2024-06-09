<script>
import PatientTable from '../components/patient-table.component.vue'
import PatientAction from '../components/patient-action.component.vue'
import ModalAddPatient from "../components/modal-add-patient.component.vue";
import ModalAllPatient from "../components/modal-alarm-patient.component.vue";
import ModalDeletePatient from "../components/modal-delete-patient.component.vue";
import ModalPatient from "../components/modal-patient.component.vue";
import ModalDoctor from "../components/modal-doctor.component.vue";

import {onMounted} from "vue";

export default {
  name: "App",
  components: {
    PatientTable,PatientAction,ModalAddPatient,ModalAllPatient,ModalDeletePatient, ModalDoctor,ModalPatient},
  props:{
    showModalD:Boolean,
    showModalP:Boolean,
    showModalDeleteP:Boolean,
    showModalAddP:Boolean,
    showModalAlarmP:Boolean
  },
  data(){return {
    showModalD:false,
    showModalP:false,
    showModalDeleteP:false,
    showModalAddP:false,
    showModalAlarmP:false
  }},
  setup() {
    onMounted(() => {
      document.cookie = 'locale=en';
    });
  },
  methods:{
    showModalDoctor(){
      this.showModalD= !this.showModalD;
    },
    showModalPatient(){
      this.showModalP= !this.showModalP;
    },
    showModalDeletePatient(){
      this.showModalDeleteP= !this.showModalDeleteP;
    },
    showModalAddPatient(){
      this.showModalAddP= !this.showModalAddP;
    },
    showModalAlarmPatient(){
      this.showModalAlarmP= !this.showModalAlarmP;
    },
  }
};
</script>

<template>
  <div class="container">
    <div class="table-section">
      <patient-table></patient-table>
    </div>
    <div class="action-section">
      <pv-button class="button-style" @click="showModalAddPatient">Agregar Paciente {{idDoctor}}</pv-button>
      <pv-button class="button-style" @click="showModalPatient">Ver Detalles</pv-button>
      <pv-button class="button-style" @click="showModalAddPatient">Recetar Medicamento</pv-button>
      <pv-button class="button-style" @click="showModalAddPatient">Tratamientos y Procedimientos</pv-button>
      <pv-button class="button-style" @click="showModalDeletePatient">Eliminar Paciente</pv-button>
    </div>

    <modal-add-patient v-if="showModalAddP" @close="showModalAddP = false"></modal-add-patient>
    <modal-delete-patient v-if="showModalDeleteP" @close="showModalDeleteP = false"></modal-delete-patient>
    <modal-patient v-if="showModalP" @close="showModalP = false"></modal-patient>
  </div>
</template>

<style>
 .container {
   display: flex;
   flex-direction: row;
   height: 100vh;
 }

.table-section {
  flex: 2;
  padding: 10px;
}

.action-section {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /*centrar el boton verticalmente*/
  align-items: center;
  width:95%;

}



@media screen and (max-width: 1280px) {

  .container {
    flex-direction: column;
    width:95%;
    margin-right:-10px;
  }
  .action-section {
    order:-1;
    flex-direction: row;
    justify-content: center;

  }
  .p-dialog.p-component.modalP-container{
    width: 80% !important;
  }
  .table-container{
    margin-right: 12px;
  }
}



 .button-style {
   height: 60px;
   width:240px;
   margin: 10px 0;
   background-color: #4A547F;
   color: white;
   border: none;
   border-radius: 10px;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: background-color 0.3s;
 }

 @media screen and (max-width: 1280px) {
   .button-style {
     height: 60px;
     width: 185px;
     margin: 5px;
     background-color: #4A547F;
     color: white;
     border: none;
     border-radius: 10px;
   }
   .p-dialog.p-component.modalP-container {
     padding: 2px !important;
   }
   .p-dialog-content{
     padding-bottom:10px !important;;
   }
   .p-dialog.p-component.modalPD-container {
     width: 95% !important;
   }
 }
 @media screen and (max-width: 920px) {

   .action-section {
     width:95%;
   }
   .button-style {
     height: min-content;
     width: 140px;
     margin: 1px 0;
     font-size: 10px;
   }
 }
 @media screen and (max-width: 880px) {

   .action-section {
     width:95%;
   }
   .button-style {
     height: min-content;
     width: 160px;
     margin: 1px 0;
     font-size: 10px;
   }
 }
 @media screen and (max-width: 820px) {

   .action-section {
     width:100%;
   }
   .button-style {
     height: min-content;
     width: 70px;
     margin: 1px 0;
     font-size: 10px;
   }
 }
 @media screen and (max-width: 540px) {
   .container {
     flex-direction: column;
     width:95%;
     margin-right:-10px;
   }
   .action-section {
     order:-1;
     flex-direction:row;
     justify-content: center;
     width:90%;
   }
   .p-dialog.p-component.modalP-container{
     width: 100%;
   }
   .table-container{
     margin-right: 12px;
   }
   .button-style {
     height: min-content;
     width: 70px;
     margin: 1px 0;
     font-size: 10px;
   }
   .p-dialog.p-component.modalP-container {
     padding: 2px !important;
   }
   .p-dialog-content{
     padding-bottom:10px !important;
   }
   .p-dialog.p-component.modalPD-container{
     width: 95% !important;
   }
 }
 @media screen and (max-width: 350px) {

   .action-section {
     width:98%;
   }
   .button-style {
     height: min-content;
     width: 30px;
     margin: 1px 0;
     font-size: 10px;
   }
 }
 .p-dialog-header, .p-dialog-content, .p-dialog-footer{
   background-color: #95A8FF ;
 }
 .p-dialog.p-component.modalP-container {
   width: 35%;
   margin: 0px auto;
   padding: 20px 30px;
   border-radius: 15px !important;
   background-color: #95A8FF !important;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
   transition: all 0.3s ease;
   font-family: Helvetica, Arial, sans-serif;
 }
 .p-dialog.p-component.modalPD-container {
   width: 60%;
   margin: 0px auto;
   padding: 20px 30px;
   border-radius: 15px !important;
   background-color: #95A8FF !important;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
   transition: all 0.3s ease;
   font-family: Helvetica, Arial, sans-serif;
 }
 .p-dialog-footer{
   width: 60%;
   margin-left: auto;
   margin-right: auto;
   padding-right: 0;
   padding-left: 0;
 }
 .modal-enter .modalP-container,
 .modal-leave-active .modalP-container {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
 }
</style>
