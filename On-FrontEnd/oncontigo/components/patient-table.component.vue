<script>

export default {
  data() {
    return {
      patients: [
        { photoUrl: '../../../public/img/vite.svg', dni: '13423432', name: 'John Doe', lastAppointment: 'dd/mm/yy', nextAppointment: 'dd/mm/yy', alarm: true },
        { photoUrl: '../../../public/img/vite.svg', dni: '13452232', name: 'Raul', lastAppointment: 'dd/mm/yy', nextAppointment: 'dd/mm/yy', alarm: false },
        { photoUrl: '../../../public/img/vite.svg', dni: '13431662', name: 'Corsario', lastAppointment: 'dd/mm/yy', nextAppointment: 'dd/mm/yy', alarm: false },
        { photoUrl: '../../../public/img/vite.svg', dni: '13642632', name: 'Flores', lastAppointment: 'dd/mm/yy', nextAppointment: 'dd/mm/yy', alarm: false },
        { photoUrl: '../../../public/img/vite.svg', dni: '13975622', name: 'Mangito', lastAppointment: 'dd/mm/yy', nextAppointment: 'dd/mm/yy', alarm: false }

      ]
    };
  },
  methods: {
    confirm(patient) {
      this.$confirm.require({
        message: '¿Desea ver más detalles sobre este paciente?',
        header: 'Confirmación',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.showDetails(patient);
        },
        reject: () => {

        }
      });
    },
    showDetails(patient) {
      console.log('Detalles del paciente:', patient);

    }
  }
};
</script>

<template>
  <div>
    <pv-datatable :value="patients" dataKey="dni">
      <pv-column header="Foto">
        <template #body="slotProps">
          <img :src="slotProps.data.photoUrl" alt="Foto de Paciente" style="width: 40px; height: auto;">
        </template>
      </pv-column>
      <pv-column field="dni" header="DNI"></pv-column>
      <pv-column field="name" header="Nombre completo"></pv-column>
      <pv-column field="lastAppointment" header="Ult. Cita"></pv-column>
      <pv-column field="nextAppointment" header="Prox. Cita"></pv-column>
      <pv-column  header="Alarma" >
        <template #body="slotProps">
          <pv-button type="button" class="alarm-button"  rounded  @click="confirm(slotProps.data)">
            <i class="pi pi-bell"></i>
          </pv-button>
        </template>
      </pv-column >
    </pv-datatable>
  </div>
</template>

<style>
  .p-datatable {
    border-radius: 6px;
    overflow: hidden;
  }

  .alarm-button {
    border: none;
    background-color:#4A547F;
    color: white;
    width: 30px;
    height: 60px;
    border-radius:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    padding: 0;
  }


  .pi-bell {
    font-size: 1.4rem;
  }

  .p-datatable .p-datatable-thead > tr > th {
    background-color: #4A547F;
    color: white;
    font-size: 1rem;
  }

  .p-datatable .p-column-title {
    font-weight: bold;
  }
  .p-datatable-tbody > tr > td {
    padding: 5px 10px;
  }
  .p-datatable-tbody > tr:nth-child(odd) > td {
    background-color: #95A8FF;
  }

  .p-datatable-tbody > tr:nth-child(even) > td {
    background-color: #D2DAFA;
  }
</style>