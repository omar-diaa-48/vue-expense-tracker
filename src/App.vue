<script setup lang="ts">
import { computed, ref } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

import { useTransactionStore } from "@/stores/transactions";
import { storeToRefs } from "pinia";

const transactionsStore = useTransactionStore();

const transactions = storeToRefs(transactionsStore);

const total = computed(() => transactionsStore.total);
const income = computed(() => transactionsStore.income);
const expenses = computed(() => transactionsStore.expenses);
</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions.transactions.value" />
    <AddTransaction />
  </div>
</template>

<style scoped></style>
