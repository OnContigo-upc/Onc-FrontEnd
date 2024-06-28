<template>
  <pv-toolbar style="background-color: #FF94B0;">
     <template #start>
       <!--
       <doctor-side-bar v-if="isDoctor"></doctor-side-bar>
       <patient-side-bar v-if="isPatient"></patient-side-bar>
        -->
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
import {patientsService} from "../../oncontigo/services/patients.service.js";
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
  data(){
    return{
      isDoctor:true,
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
</style>
