import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilter';

let ExpenseDashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default ExpenseDashboard;