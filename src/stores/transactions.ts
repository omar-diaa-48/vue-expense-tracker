import { TransactionModel } from '@/models/transaction.model'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTransactionStore = defineStore('transactions', () => {
  const transactions = ref<TransactionModel[]>([])

  return { transactions }
})
