import React, { useState } from 'react';
import { addTransaction, calculateTotals } from './BudgetTrackerUtils';

export default function BudgetTracker() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ type: 'income', amount: '', description: '' });

  const { totalIncome, totalExpenses } = calculateTotals(transactions);

  const handleAddTransaction = () => {
    const updatedTransactions = addTransaction(transactions, newTransaction);
    setTransactions(updatedTransactions);
    setNewTransaction({ type: 'income', amount: '', description: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Budget Tracking</h2>
      <div className="flex gap-2 justify-between mb-4">
        <div className="bg-green-50 p-4 rounded-lg w-full">
          <p className="text-gray-600">Income</p>
          <p className="text-2xl font-bold text-green-600">${totalIncome}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg w-full">
          <p className="text-gray-600">Expenses</p>
          <p className="text-2xl font-bold text-red-600">${totalExpenses}</p>
        </div>
      </div>
      <div className="grid gap-4 mb-4">
        <select
          value={newTransaction.type}
          onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
          className="box-border border p-2 rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          className="box-border border p-2 rounded"
          placeholder="Amount"
        />
        <input
          type="text"
          value={newTransaction.description}
          onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
          className="box-border border p-2 rounded"
          placeholder="Description"
        />
        <button
          onClick={handleAddTransaction}
          className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-pink-600"
        >
          Add Transaction
        </button>
      </div>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li key={t.id} className="flex justify-between items-center p-2 border rounded">
            <div>
              <p className="font-medium">{t.description}</p>
              <p className={`text-sm ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                ${t.amount} ({t.type})
              </p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => setTransactions(transactions.filter((transaction) => transaction.id !== t.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}