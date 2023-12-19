<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn" @click="handleDelete(transaction.id)">
        x
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ITransaction } from "@/models/transaction.interface";
import type { PropType } from "vue";
import { useTransactionStore } from "@/stores/transactions";

const transactionsStore = useTransactionStore();

defineProps({
  transactions: {
    type: Array as PropType<Array<ITransaction>>,
    required: true,
    default: () => [],
  },
});

const handleDelete = (transactionId: number) => {
  transactionsStore.deleteTransaction(transactionId);
};
</script>
