<template>
  <pv-toolbar style="background-color: #FF94B0;">
      <template #start>
        <div v-if="!isDoctor && !isPatient" class="flex align-items-center justify-content-between px-4 pt-3 ">
            <h1>OnContigo</h1>
        </div>
        <div v-if="isDoctor || isPatient" >
        <doctor-side-bar v-if="isDoctor"></doctor-side-bar>
        <patient-side-bar v-if="isPatient"></patient-side-bar>
        </div>
      </template>
      <template #end>
        <nav>

          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca</a></li>
          </ul>
        </nav>
      </template>
  </pv-toolbar>
</template>


<script>
import DoctorSideBar from "../../public/components/doctor-side-bar.component.vue";
import PatientSideBar from "../../public/components/patient-side-bar.component.vue";
import {PatientsService} from "../../oncontigo/services/patients.service.js";
import {Patient} from "../../oncontigo/model/patient.js";
export default {
  name: 'Header',
  components: {
    DoctorSideBar,PatientSideBar

  },
  props:{
    isDoctor:Boolean,
    isPatient:Boolean
  },
  methods:{
    isAuthPaths(){
      //console.log(this.$route.path=='')
      this.isDoctor=false;
      this.isPatient=false;
    }
  },
  data(){
    return{
      isDoctor: true,
      isPatient: false,
    }
  },
}
</script>

<style>

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 20px; /* Espaciado entre elementos de menú */
}

nav ul li a {
  text-decoration: none;
  color: inherit;
}

h1 {
  margin: 0; /* Elimina cualquier margen predeterminado para ajustar el alineamiento */
}
.p-dialog-footer{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 0;
  padding-left: 0;
}
.p-dialog.p-component.modalD-container {
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 15px !important;
  background-color: #95A8FF !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
