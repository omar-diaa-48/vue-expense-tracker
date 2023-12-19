<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

export default defineComponent({
  components: {
    Header,
    Balance,
    AddTransaction,
    IncomeExpenses,
    TransactionList,
  },
});
</script>

<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<style scoped></style>
