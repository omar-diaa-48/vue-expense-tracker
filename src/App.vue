<script setup lang="ts">
import { computed, ref } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

import { useTransactionStore } from "@/stores/transactions";

const transactionsStore = useTransactionStore();

const transactions = transactionsStore.transactions;

const total = computed(() =>
  transactions.reduce((previous, current) => previous + current.amount, 0)
);
const income = computed(() => transactionsStore.getIncome);
const expenses = computed(() => transactionsStore.getExpenses);
</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<style scoped></style>
