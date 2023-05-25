import React from 'react';

import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar.jsx';

const Navbar = ({ setFilter }) => {
	return (
		<header>
			<h2>
				<span>Music</span>
				<span className='text-grey'>Library</span>
			</h2>

			<SearchBar setFilter={setFilter} />
		</header>
	);
};

export default Navbar;
