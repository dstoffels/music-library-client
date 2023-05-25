import React from 'react';

import SearchBar from '../SearchBar/SearchBar.jsx';

import './Navbar.css';

const Navbar = ({ setFilter }) => {
	return (
		<header>
			<h2>
				<span>Music</span>
				<span className="text-grey">Library</span>
			</h2>

			<SearchBar setFilter={setFilter} />
		</header>
	);
};

export default Navbar;
