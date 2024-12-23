<script>
import DayNumber1 from './days//DayNumber1.vue';
import DayNumber2 from './days/DayNumber2.vue';

export default {
  components: { DayNumber1, DayNumber2 },
}
</script>

<template>
  <DayNumber1 />
  <hr />
  <DayNumber2 />
</template>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
