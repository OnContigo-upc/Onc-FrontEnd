<!-- ButtonComponent.vue -->
<template>
  <div>
    <pv-button class="button-style " @click="handleClick">
      <slot></slot>
    </pv-button>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: Function,
      required: true
    },
    visible:false
  },
  methods: {
    handleClick() {
      this.action();
      this.visible=!this.visible;
    }
  }
}
</script>

<style scoped>
.button-style {
  width: 100%;
  height: 60px;
  margin: 10px 0;
  background-color: #4A547F;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

@media screen and (max-width: 1280px) {
  .button-style {
    height: 60px;
    margin: 5px;
    background-color: #4A547F;
    color: white;
    border: none;
    border-radius: 10px;
  }

}
@media screen and (max-width: 540px) {
  .button-style {
    width: min-content;
    height: min-content;
    margin: 1px 0;
    font-size: 10px;
  }
}
</style>