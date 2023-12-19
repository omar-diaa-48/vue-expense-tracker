import type { ITransaction } from '@/models/transaction.interface';
import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    transactions: [
      { id: 1, text: "Flower", amount: -19.99 },
      { id: 2, text: "Salary", amount: 290.88 },
      { id: 3, text: "Book", amount: -10 },
      { id: 4, text: "Camera", amount: -12.21 },
      { id: 5, text: "Flower", amount: -9.54 },
    ] as ITransaction[]
  }),
  getters: {
    income: (state) => state.transactions.filter((transaction: ITransaction) => transaction.amount > 0).reduce((previous, current) => previous + current.amount, 0),
    expenses: (state) => state.transactions.filter((transaction: ITransaction) => transaction.amount < 0).reduce((previous, current) => previous + current.amount, 0),
    total: (state) => state.transactions.reduce((previous, current) => previous + current.amount, 0)
  },
  actions: {
    addTransaction(transaction: Omit<ITransaction, "id">) {
      const id = this.transactions.length + 1;
      this.transactions.push({ ...transaction, id })
    },
    deleteTransaction(transactionId: number) {
      this.transactions = this.transactions.filter((transaction) => transaction.id !== transactionId)
    }
  }
})
