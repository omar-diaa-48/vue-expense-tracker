<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        id="amount"
        v-model="amount"
        placeholder="Enter amount..."
      />
    </div>
    <button :disabled="amount === 0" class="btn">Add transaction</button>
  </form>
</template>

<script setup lang="ts">
import { useTransactionStore } from "@/stores/transactions";
import { ref } from "vue";

const transactionsStore = useTransactionStore();

const text = ref("");
const amount = ref(0);

const resetForm = () => {
  text.value = "";
  amount.value = 0;
};

const handleSubmit = () => {
  transactionsStore.addTransaction({ text: text.value, amount: amount.value });
  resetForm();
};
</script>
