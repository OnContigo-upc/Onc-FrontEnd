<script >

export default {
  name:"doctor-side-bar",
  props:{
    visible:Boolean,
  },
  methods:{
    onOptionClick(op) {
      console.log(`Has hecho clic en la tarjeta ${op}`);
      const doctorId = this.$route.params.id;  // Accediendo al ID del doctor desde la URL

      if (op === 'Patients') {
        // Navegar a la vista de descripción general de los pacientes del mismo doctor
        this.$router.push({ path: `/patient-overview/1` });//${doctorId}
      } else if (op === 'Calendar') {
        this.$router.push({ path: '/calendar' });
      }
    },
  },
  data(){
    return{
      visible:true,
      showModalD:false
    }
  },
}
</script>
<template>
  <div class="card flex justify-content-center" >
    <pv-sidebar v-model:visible="visible" style="background-color:#FF94B0">
      <template #container="{ closeCallback }">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span class="inline-flex align-items-center gap-2">
                            <span class="font-semibold text-2xl text-primary">OnContigo</span>
                        </span>
            <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem modalP-button-ic ">X</Button>
                        </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="op-doctor">
              <li @click="onOptionClick('Home')">INICIO</li>
              <li @click="onOptionClick('Patients')">PACIENTES</li>
              <li @click="onOptionClick('Calendar')">CALENDARIO</li>
            </ul>
          </div>
        </div>
      </template>
    </pv-sidebar>
    <h1  @click="visible = true">OnContigo</h1>
  </div>

</template>
<style scoped>
.modalP-button-ic{
  background-color: #e57d99;
  color: #FFFFFF;
  height: 32px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  top:17px !important;
}
</style>