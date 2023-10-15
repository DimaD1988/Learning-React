import React, { useState } from 'react';

import { expensesDB } from './db/expensesDB';

import { NewExpense } from './components/NewExpense/NewExpense';
import { Expenses } from './components/Expenses/Expenses';

const expensesData = [...expensesDB];

function App() {
	const [expenses, setExpenses] = useState(expensesData);

	const AddExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={AddExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
