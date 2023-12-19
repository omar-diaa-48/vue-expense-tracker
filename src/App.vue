<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";

export default defineComponent({
  components: {
    Header,
    Balance,
  },
});
</script>

<template>
  <Header />
  <div class="container">
    <Balance />
  </div>
</template>

<style scoped></style>
