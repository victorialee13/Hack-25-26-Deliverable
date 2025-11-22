function QuoteCard({ name, message, time }) {
	const formattedDate = new Date(time).toLocaleString();

	return (
		<div className="quote-card">
			<p className="quote-name">{name}</p>
			<p className="quote-message">
				<span className="quote-mark">"</span>
				{message}
				<span className="quote-mark">"</span>
			</p>
			<p className="quote-date">{formattedDate}</p>
		</div>
	);
}

export default QuoteCard;

