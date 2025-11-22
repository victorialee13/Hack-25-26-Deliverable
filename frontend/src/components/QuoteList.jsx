import QuoteCard from "./QuoteCard";

function QuoteList({ quotes }) {
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

