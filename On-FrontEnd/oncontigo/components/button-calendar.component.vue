<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  date: {
    type: String,
    required: false
  },
  time:{
    type:String,
    required:false
  },
  booked: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['toggle-booked']);

const toggleBooked = () => {
  emit('toggle-booked');
};
</script>

<template>
  <pv-button class="boton" @click="toggleBooked()" :class="{ booked: !props.booked }">
    <p v-if="booked" class="fullname">Paciente</p>
    <div class="date">
      <p v-if="booked">{{ date }}</p>
      <p v-if="booked">{{time}}</p>
    </div>
  </pv-button>
</template>

<style scoped>
.boton{
  width:130px;
  height:55px;
  /*background-color: rgba(210, 218, 250, 0.75)*/
  background-color: #4A547F;
  border-radius:0px;
  display:flex;
  flex-direction:column;
  gap:0.7em;
}


p{
  color:#FFFFFF;
  text-align:center;
  margin: 0 10px;
}

.date{
  display:flex;
  flex-direction:row;
  gap: 0.2em;
}
.fullname{
  font-size:0.8em;
}

.booked{
  background-color: rgba(210, 218, 250, 0.75);
}
</style>