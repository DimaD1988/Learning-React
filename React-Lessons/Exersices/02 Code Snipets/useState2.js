import React, { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {
	const [input, setInput] = useState('');

	const titleChangeHandler = (e) => {
		setInput(e.target.value);
		console.log(input, setInput);
		return;
	};

	return (
		<form>
			<label>Title</label>
			<input type="text" onChange={titleChangeHandler} />
		</form>
	);
};
