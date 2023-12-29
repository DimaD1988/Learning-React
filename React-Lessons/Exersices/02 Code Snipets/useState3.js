import React, { useState } from 'react';

export function App() {
	const [messageValidity, setMessageValidity] = useState('Invalid');

	function messageChangeHandler(e) {
		const value = e.target.value;

		if (value.trim().length < 3) setMessageValidity('Invalid');
		else setMessageValidity('Valid');
	}

	return (
		<form>
			<label>Your message</label>
			<input type="text" onChange={messageChangeHandler} />
			<p>{messageValidity} message</p>
		</form>
	);
}
