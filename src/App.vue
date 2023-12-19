<script setup lang="ts">
import { computed, ref } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";
import type { ITransaction } from "./models/transaction.interface";

const transactions = ref<ITransaction[]>([
  { id: 1, text: "Flower", amount: -19.99 },
  { id: 2, text: "Salary", amount: 290.88 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: -12.21 },
  { id: 5, text: "Flower", amount: -9.54 },
]);

const income = computed(() =>
  transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((previous, current) => previous + current.amount, 0)
);
const expenses = computed(() =>
  transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((previous, current) => previous + current.amount, 0)
);
</script>

<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<style scoped></style>
