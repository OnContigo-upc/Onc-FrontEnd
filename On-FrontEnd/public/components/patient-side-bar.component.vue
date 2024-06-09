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
        this.$router.push({ path: '/calendar' });
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
                        <span class="inline-flex align-items-center gap-2">
                            <span class="font-semibold text-2xl text-primary">OnContigo</span>
                        </span>
            <span>
                  <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem modalP-button-ic ">X</Button>
                        </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="op-patient" >
              <li @click="onOptionClick('Home')">INICIO</li>
              <li @click="onOptionClick('Home')">INFORMACIÓN</li>
              <li @click="onOptionClick('Calendar')">CALENDARIO</li>
              <li @click="showModalDoctor">MI DOCTOR</li>
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
</style>