<template>
  <CounterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// defineComponent for typscritp
import CounterComponent from "./components/CounterComonent.vue";

export default defineComponent({
  name: "App",
  components: {
    CounterComponent,
  },
});
</script>
