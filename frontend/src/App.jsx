import { useState, useEffect } from "react";
import "./App.css";
import QuoteForm from "./components/QuoteForm";
import QuoteFilter from "./components/QuoteFilter";
import QuoteList from "./components/QuoteList";
import Notification from "./components/Notification";
import { fetchQuotes, submitQuote } from "./services/quoteApi";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [filter, setFilter] = useState("all quotes");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [notification, setNotification] = useState(null);

	useEffect(() => {
		fetchQuotes(filter)
			.then((data) => setQuotes(data))
			.catch((error) => console.error("Error fetching quotes:", error));
	}, [filter]);

	const handleSubmit = (e) => {
		e.preventDefault();
		submitQuote(name, message)
			.then((newQuote) => {
				setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
				setName("");
				setMessage("");
				setNotification({
					message: "Quote added successfully!",
					type: "success",
				});
			})
			.catch((error) => {
				console.error("Error submitting quote:", error);
				setNotification({
					message: "Failed to add quote. Please try again.",
					type: "error",
				});
			});
	};

	return (
		<div className="App">
			{notification && (
				<Notification
					message={notification.message}
					type={notification.type}
					onClose={() => setNotification(null)}
				/>
			)}
			<img src="/quotebook.png" alt="Quote Book Logo" className="logo" />
			<h1>Hack at UCI Tech Deliverable</h1>

			<QuoteForm
				name={name}
				message={message}
				onNameChange={(e) => setName(e.target.value)}
				onMessageChange={(e) => setMessage(e.target.value)}
				onSubmit={handleSubmit}
			/>

			<h2>Previous Quotes</h2>
			<QuoteFilter
				filter={filter}
				onFilterChange={(e) => setFilter(e.target.value)}
			/>
			<QuoteList quotes={quotes} />
		</div>
	);
}

export default App;
