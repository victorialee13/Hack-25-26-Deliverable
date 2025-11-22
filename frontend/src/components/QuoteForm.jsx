function QuoteForm({ name, message, onNameChange, onMessageChange, onSubmit }) {
	return (
		<>
			<h2>Submit a quote</h2>
			<form onSubmit={onSubmit}>
				<label htmlFor="input-name">Name</label>
				<input
					type="text"
					name="name"
					id="input-name"
					value={name}
					onChange={onNameChange}
					required
				/>
				<label htmlFor="input-message">Quote</label>
				<input
					type="text"
					name="message"
					id="input-message"
					value={message}
					onChange={onMessageChange}
					required
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default QuoteForm;

