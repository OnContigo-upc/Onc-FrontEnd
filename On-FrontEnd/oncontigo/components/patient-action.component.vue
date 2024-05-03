<!-- ButtonComponent.vue -->
<template>
  <div>
    <pv-button class="button-style" @click="handleClick">
      <slot></slot> <!-- Permite personalizar el contenido del botón -->
    </pv-button>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.action();
    }
  }
}
</script>

<style scoped>
.button-style {
  width: 50%;
  margin: 10px 0;
  background-color: #4A547F;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
}
</style>
