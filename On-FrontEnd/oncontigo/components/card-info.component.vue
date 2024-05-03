<script setup>

</script>

<template>
  <div class="card-info">
    <div class="image-container">
      <img src="../public/vite.svg">
    </div>
    <pv-card class="card-description">
      <template #title>Paciente</template>
      <template #content>
        <p class="m-0">
          25/05/24
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

}
</style>