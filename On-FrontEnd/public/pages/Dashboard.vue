<template>
  <transition name="dashboard-options" >

  <div class="dashboard">
    <div class="dashboard-title">
      <div class="text-bold" style="width:100% !important">Bienvenido</div>
      <div class="text-bold" style="width:100% !important">¡Bienvenida a tu Portal de Oncontigo!</div>
    </div>
    <div class="main-col text-left options md:flex md:max-w-768">
      <div class="col text-bold items-center">
        <pv-card class="card" @click="onCardClick('Lista de pacientes')">
          <template #header>
            <img class="option-img" alt="patient-list-img" src="@/assets/images/patient-list.png" />
          </template>
          <template #content>
            <div class="text-shape">
              <h2 class="text-center text-bold">LISTA PACIENTES</h2>
            </div>
          </template>
        </pv-card>
      </div>
      <div class="col">
        <pv-card class="card" @click="onCardClick('Calendario')">
          <template #header>
            <img class="option-img" alt="calendar-img" src="@/assets/images/calendar.png" />
          </template>
          <template #content>
            <div class="text-shape">
              <h2 class="text-center text-bold">CALENDARIO</h2>
            </div>
          </template>
        </pv-card>
      </div>
    </div>

  </div>
  </transition>

</template>

<script>
import {patientsService} from "../../oncontigo/services/patients.service.js";

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
.text-bold {
  font-weight: bold;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-shape {
  background-color: #95A8FF;
  height: 60px;
  padding: 1px 0 41px;
  width: 250px;
  border: 1px solid #666D96;
  display: flex;
  justify-content: center;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 10px 0;
}

.option-img {
  height: 300px;
  width: 250px;
}

.dashboard {
  margin-left: 2%;
}

.dashboard-title {
  margin-top: 20px;
}

.options {
  margin: 10% auto 0;
  width: 600px;
}

.card {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
}

@media (max-width: 768px) {
  .card img {
    display: none;
  }

  .card {
    width: min-content;
  }
}

@media (max-width: 600px) {
  .card .text-shape {
    font-size: 12px;
    width: min-content;
  }

  .col {
    width: 100%;
    justify-content: center;
  }

  .options {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>