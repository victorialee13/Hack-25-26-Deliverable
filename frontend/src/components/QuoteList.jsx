import QuoteCard from "./QuoteCard";

function QuoteList({ quotes }) {
	if (quotes.length === 0) {
		return (
			<div className="empty-state">
				<p className="empty-message">No quotes yet. Be the first to share one!</p>
			</div>
		);
	}

	return (
		<div className="messages">
			{quotes.map((quote) => (
				<QuoteCard
					key={`${quote.name}-${quote.time}`}
					name={quote.name}
					message={quote.message}
					time={quote.time}
				/>
			))}
		</div>
	);
}

export default QuoteList;

