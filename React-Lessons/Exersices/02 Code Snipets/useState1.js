import React, { useState } from 'react';
export function App() {
	const [price, setPrice] = useState(100);

	const eventListener = () => {
		setPrice(75);
	};

	return (
		<div>
			<p>${price}</p>
			<button onClick={eventListener}>Apply Discount</button>
		</div>
	);
}
