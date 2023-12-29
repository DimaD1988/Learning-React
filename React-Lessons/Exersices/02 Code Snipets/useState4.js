import React, { useState } from 'react';

export function App() {
	const [counter, setCounter] = useState(0);

	function incrementCounterHandler() {
		setCounter((prevCounter) => prevCounter + 1);
	}

	return (
		<div>
			<p id="counter">{counter}</p>
			<button onClick={incrementCounterHandler}>Increment</button>
		</div>
	);
}
