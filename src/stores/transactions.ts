import { TransactionModel } from '@/models/transaction.model'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    transactions: [] as TransactionModel[]
  }),
  getters: {
    getIncome: (state) => state.transactions.filter((transaction: TransactionModel) => transaction.amount > 0).reduce((previous, current) => previous + current.amount, 0),
    getExpenses: (state) => state.transactions.filter((transaction: TransactionModel) => transaction.amount < 0).reduce((previous, current) => previous + current.amount, 0),
  },
  actions: {
    addTransaction(transaction: TransactionModel) {
      this.transactions = [...this.transactions, transaction]
    }
  }
})
