import { useState, useEffect } from "react";
import "./App.css";
import QuoteCard from "./QuoteCard";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [filter, setFilter] = useState("all quotes");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		const url = `/api/quotes?max_age=${encodeURIComponent(filter)}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setQuotes(data))
			.catch((error) => console.error("Error fetching quotes:", error));
	}, [filter]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", name);
		formData.append("message", message);

		fetch("/api/quote", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((newQuote) => {
				setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
				setName("");
				setMessage("");
			})
			.catch((error) => console.error("Error submitting quote:", error));
	};
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<h1>Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="input-name">Name</label>
				<input
					type="text"
					name="name"
					id="input-name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<label htmlFor="input-message">Quote</label>
				<input
					type="text"
					name="message"
					id="input-message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			<label htmlFor="filter-select">Filter by:</label>
			<select
				id="filter-select"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			>
				<option value="all quotes">All time</option>
				<option value="last week">Last week</option>
				<option value="last month">Last month</option>
				<option value="last year">Last year</option>
			</select>
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
		</div>
	);
}

export default App;
