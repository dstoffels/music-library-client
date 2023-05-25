import React, { useEffect, useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ setFilter }) => {
	const [query, setQuery] = useState('');
	const [searchField, setSearchField] = useState('title');

	const handleSubmit = (e) => {
		e.preventDefault();
		setFilter({ searchField, query });
	};

	useEffect(() => {
		if (query === '') setFilter({ searchField, query });
	}, [query]);

	useEffect(() => {
		setFilter({ searchField, query });
	}, [searchField]);

	return (
		<form onSubmit={handleSubmit} className="searchbar">
			<select
				data-cy="search-bar_select"
				className="form-select"
				value={searchField}
				onChange={(e) => setSearchField(e.target.value)}
			>
				<option value="title">Title</option>
				<option value="artist">Artist</option>
				<option value="album">Album</option>
				<option value="genre">Genre</option>
				<option value="release_date">Release Date</option>
			</select>
			<input
				data-cy="search-bar_input"
				type="search"
				className="form-control"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value.toLowerCase())}
			/>
			<button data-cy="search-bar_submit-btn" type="submit" className="btn btn-primary">
				Search
			</button>
		</form>
	);
};

export default SearchBar;
