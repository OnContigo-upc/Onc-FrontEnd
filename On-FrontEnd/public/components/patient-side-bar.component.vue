<script >

import ModalDoctor from "../../oncontigo/components/modal-doctor.component.vue";

export default {
  name:"patient-side-bar",
  components: {ModalDoctor},
  props:{
    visible:Boolean,
    showModalD:Boolean,
  },
  methods:{
    onOptionClick(op) {
      console.log(`Has hecho clic en la tarjeta ${op}`);
      const doctorId = 1;  // this.$route.params.idAccediendo al ID del doctor desde la URL

      if (op === 'Patients') {
        // Navegar a la vista de descripción general de los pacientes del mismo doctor
        this.$router.push({ path: `/patient-overview/${doctorId}` });
      } else if (op === 'Calendar') {
        this.$router.push({ path: '/calendar2' });
      }
      else if (op === 'Doctor') {
        this.$router.push({ path: '/calendar' });
      }
    },
    showModalDoctor() {
      this.showModalD = !this.showModalD;
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
    <pv-sidebar v-model:visible="visible"  style="background-color:#FF94B0">
      <template #container="{ closeCallback }">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
            <h1  @click="visible = true">OnContigo</h1>

            <span  @click="closeCallback">
                  X     </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="op-patient list-none p-0 m-0 overflow-hidden" >
              <li class="patient-li" @click="onOptionClick('Home')">
                <a class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                  <span class="font-medium">INICIO</span>
                </a>
              </li>
              <li class="patient-li" @click="onOptionClick('Home')">
                <a class=" flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                  <span class="font-medium">INFORMACIÓN</span>
                </a></li>
              <li class="patient-li" @click="onOptionClick('Calendar')">
                <a class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                  <span class="font-medium">CALENDARIO</span>
                </a></li>
              <li class="patient-li" @click="showModalDoctor"><a class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                <span class="font-medium">MI DOCTOR</span>
              </a></li>
            </ul>
          </div>
        </div>
      </template>
    </pv-sidebar>
    <h1  @click="visible = true">OnContigo</h1>

  </div>
  <modal-doctor v-if="showModalD" @close="showModalD = false"></modal-doctor>

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
.p-dialog-header, .p-dialog-content, .p-dialog-footer{
  background-color: #95A8FF ;
}
.p-dialog.p-component.modalD-container {
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 15px !important;
  background-color: #95A8FF !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.patient-li:hover {
  box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5);
}
</style>