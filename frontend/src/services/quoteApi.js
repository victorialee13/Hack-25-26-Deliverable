/**
 * API service for quote-related operations
 */

export async function fetchQuotes(maxAge = "all quotes") {
	const url = `/api/quotes?max_age=${encodeURIComponent(maxAge)}`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch quotes: ${response.statusText}`);
	}
	return response.json();
}

export async function submitQuote(name, message) {
	const formData = new FormData();
	formData.append("name", name);
	formData.append("message", message);

	const response = await fetch("/api/quote", {
		method: "POST",
		body: formData,
	});

	if (!response.ok) {
		throw new Error(`Failed to submit quote: ${response.statusText}`);
	}
	return response.json();
}

