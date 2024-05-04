<template>
  <transition name="dashboard-options" >

  <div class="dashboard">
    <div class="dashboard-title">
      <div class="text-bold" style="width:100% !important">Bienvenida, Jane Doe.</div>
      <div class="text-bold" style="width:100% !important">¡Bienvenida a tu Portal de Oncontigo!</div>
    </div>
     <div class="main-col text-left options md:flex md:max-w-768">
      <div class="col text-bold items-center">
        <div class="card" @click="onCardClick('Lista de pacientes')">
          <img class="option-img" alt="patient-list-img" src="@/assets/images/patient-list.png"/>
          <div class="text-shape">
            <h2  class="text-center text-bold">LISTA PACIENTES</h2>
          </div>
      </div>
      </div>
      <div class="col">
        <div class="card" @click="onCardClick('Calendario')">
          <img class="option-img" alt="calendar-img" src="@/assets/images/calendar.png"/>
          <div class="text-shape">
            <h2 class="text-center text-bold">CALENDARIO</h2>
          </div>
        </div>
      </div>
    </div>


  </div>
  </transition>

</template>

<script>
import { PatientsService } from "../services/doctor.service.js";

export default {
  name: 'Dashboard',
  methods: {
    onCardClick(cardName) {
      console.log(`Has hecho clic en la tarjeta ${cardName}`);
      const doctorId = this.$route.params.id;  // Accediendo al ID del doctor desde la URL

      if (cardName === 'Lista de pacientes') {
        // Navegar a la vista de descripción general de los pacientes del mismo doctor
        this.$router.push({ path: `/patient-overview/${doctorId}` });
      } else if (cardName === 'Calendario') {
        this.$router.push({ path: '/calendar' });
      }
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
.text-center{
  text-align: center;
}
.text-shape{
  background-color: #95A8FF;
  height: 60px;
  padding-top: 1px;
  padding-bottom: 41px;
  width: 250px;
  border: 1px solid #666D96;
}
.main-row{
  display:flex;
}
.col{
  flex-grow:1;
  margin:0px 2px;
}
.option-img {
  height: 300px;
  width: 250px;
}
.dashboard {
  margin-left:2%;
}
.dashboard-title{
  margin-top:20px;
}
.options{
  margin: 0 auto;
  margin-top:10%;
  width:600px;
}
.card {
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer; /* Esto hace que el cursor cambie a una mano cuando se pasa por encima de las tarjetas   */
}
</style>