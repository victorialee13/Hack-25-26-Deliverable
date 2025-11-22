const FILTER_OPTIONS = [
	{ value: "all quotes", label: "All time" },
	{ value: "last week", label: "Last week" },
	{ value: "last month", label: "Last month" },
	{ value: "last year", label: "Last year" },
];

function QuoteFilter({ filter, onFilterChange }) {
	return (
		<>
			<label htmlFor="filter-select">Filter by:</label>
			<select
				id="filter-select"
				value={filter}
				onChange={onFilterChange}
			>
				{FILTER_OPTIONS.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
}

export default QuoteFilter;

