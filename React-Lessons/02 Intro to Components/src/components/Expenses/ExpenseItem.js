import React from 'react';

import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import './ExpenseItem.css';

export function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<li className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</li>
		</Card>
	);
}
