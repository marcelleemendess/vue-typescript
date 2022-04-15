<template>
  <!-- v-if -> the forme only display if the user is not logged in  -->
  <div v-if="!userStore.getters.isLoggedIn" class="d-grid gap-2 col-6 mx-auto">
    <FormLogin />
  </div>
  <div v-else class="text-certer">
    <h2>Welcome, {{ userStore.state.name }}</h2>
    <CounterComponent />
    <button class="btn btn-secondary" @click="userStore.logout()">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
// defineComponent for typscritp
import FormLogin from "./components/FormLogin.vue";
import CounterComponent from "./components/CounterComonent.vue";
//import userStore to check if the user is logged in
import userStore from "./stores/user";

export default defineComponent({
  name: "App",
  components: { FormLogin, CounterComponent },
  setup() {
    onMounted(userStore.getUser);
    return { userStore };
  },
});
</script>
