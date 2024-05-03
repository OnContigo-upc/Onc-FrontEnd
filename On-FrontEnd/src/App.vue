<script >
import {defineComponent} from "vue";
import Calendar from "../oncontigo/pages/calendar.component.vue";


export default defineComponent({
  components: {Calendar}
})
</script>

<template>
    <router-view></router-view>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');


@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-pink: #FFBBCD;
  --primary-blue:#95A8FF;
  --gray-1: #D9D9D9;
  --gray-2:#8E8E8E;
  --gray-3:#4D4D4D;
  --black: #282828;
  --white: #FFFFFF;
  --secondary-purple-navy: #4A547F;
  --secondary-pink-1: #FF94B0;
  --secondary-pale-lavender:#D2DAFA;
  --secondary-pink-2:#FFDCE5;
  --text-color-orange-1:#FFA621;
  --text-color-orange-2:#FFBB57;
  --text-color-green-1:#1EC098;
  --text-color-green-2:#54D6B6;
  --text-color-dark-green-1:#15221B;
  --text-color-black:#000000;
  --text-color-black:#FFFFFF;
  --font-primary: League Spartan;
  --heading-1-size: 52px;
  --heading-2-size: 36px;
  --heading-3-size: 24px;
  --heading-4-size: 18px;
  --large-text-bold-size: 24px;
  --large-text-regular-size: 24px;
  --medium-text-bold-size: 18px;
  --medium-text-regular-size: 18px;
  --normal-text-bold-size: 16px;
  --normal-text-regular-size: 16px;
  --small-text-bold-size: 14px;
  --small-text-regular-size: 14px;
}
* {
  user-select: none;
}

* :not(i) {
  font-family: var(--font-primary) !important;
}

body {
  background-color: var(--black);
}
</style>
