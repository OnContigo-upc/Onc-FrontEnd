<script setup>
import CardInfo from "./card-info.vue";
</script>

<template>
  <div class="calendar-info">
    <div class="calendar-title">
      <h1>Calendario</h1>
    </div>

    <div class="cards-container">
      <card-info></card-info>
      <card-info></card-info>
      <card-info></card-info>
      <card-info></card-info>
    </div>
  </div>
</template>

<style scoped>
.calendar-info{
  display:flex;
  flex-direction: column
}

.calendar-title{
  display:flex;
  align-items:center;
  justify-content:center;
  height:129px;
  background-color: #95A8FF;
}
.cards-container{
  background-color: #4A547F;
  flex-grow: 1;
}

.calendar-title h1{
  margin: 0px;
  color: #000000;
  font-size: 48px;
}
</style>