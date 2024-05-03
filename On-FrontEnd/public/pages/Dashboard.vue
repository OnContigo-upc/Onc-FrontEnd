<template>
  <div class="dashboard">
    <div class="card" @click="onCardClick('Lista de pacientes')">
      <h2>Lista de pacientes</h2>
    </div>
    <div class="card" @click="onCardClick('Calendario')">
      <h2>Calendario</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    onCardClick(cardName) {
      // Aquí puedes manejar lo que sucede cuando se hace clic en las tarjetas
      console.log(`Has hecho clic en la tarjeta ${cardName}`);
    }
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-around;
}

.card {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Esto hace que el cursor cambie a una mano cuando se pasa por encima de las tarjetas */
}
</style>