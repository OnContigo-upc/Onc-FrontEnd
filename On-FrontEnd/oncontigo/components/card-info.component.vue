<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: false,
    default:''
  },
  date:{
    type:String,
    required:false,
    default:''
  },
})

function formatDate(date) {
  const d = new Date(date);
  const day = ('0' + d.getDate()).slice(-2);
  const month = ('0' + (d.getMonth() + 1)).slice(-2);
  const year = d.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
}
</script>

<template>
  <div class="card-info">
    <div class="image-container">
      <img src="../../src/assets/images/userplaceholder.png">
    </div>
    <pv-card class="card-description">
      <template #title>{{ name }}</template>
      <template #content>
        <p class="m-0">
          {{ formatDate(date)}}
        </p>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.card-info{
  margin:4em;
  display:flex;
  gap: 2em;
  align-items:center;
  justify-content:center;
}

.card-description{
  width: 500px;
  border-radius:14px;
  background-color:#D2DAFA;
}
.image-container{
  border-radius: 50%;
  background: white;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  display:flex;
  align-items:center;
  justify-content:center;

}
img{
  width:100px;
}

</style>