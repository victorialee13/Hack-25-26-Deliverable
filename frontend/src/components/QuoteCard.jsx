function QuoteCard({ name, message, time }) {
	const formattedDate = new Date(time).toLocaleString();

	return (
		<div className="quote-card">
			<p className="quote-name">{name}</p>
			<p className="quote-message">{message}</p>
			<p className="quote-date">{formattedDate}</p>
		</div>
	);
}

export default QuoteCard;

