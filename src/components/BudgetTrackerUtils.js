export const calculateTotals = (transactions) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);
  
  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  return { totalIncome, totalExpenses };
};

export const addTransaction = (transactions, newTransaction) => {
  if (newTransaction.amount && newTransaction.description) {
    return [...transactions, { id: Date.now(), ...newTransaction }];
  }
  return transactions;
};