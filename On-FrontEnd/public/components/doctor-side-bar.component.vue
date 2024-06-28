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
            <h1  @click="visible = true">OnContigo</h1>

            <span  @click="closeCallback">
                  X     </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="op-doctor list-none p-0 m-0 overflow-hidden">
              <li class="doctor-li" @click="onOptionClick('Home')">
                <a class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                  <span class="font-medium">INICIO</span>
                </a>
              </li>
              <li class="doctor-li" @click="onOptionClick('Patients')">
                <a class=" flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                  <span class="font-medium">PACIENTES</span>
                </a></li>
              <li class="doctor-li"  @click="onOptionClick('Calendar')">
                <a class=" flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                  <span class="font-medium">CALENDARIO</span>
                </a></li>
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
.doctor-li:hover {
  box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5);
}
</style>