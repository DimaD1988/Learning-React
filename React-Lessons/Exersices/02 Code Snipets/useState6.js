import React from 'react';

const TODOS = ['Learn React', 'Practice React', 'Profit!'];

function Todo(props) {
	return <li>{props.text}</li>;
}

export function App() {
	return (
		<ul>
			{TODOS.map((todo) => (
				<Todo text={todo} />
			))}
		</ul>
	);
}
