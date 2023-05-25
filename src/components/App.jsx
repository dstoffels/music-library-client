import Navbar from './Navbar/Navbar.jsx';
import MusicTable from './MusicTable/MusicTable.jsx';
import { useState } from 'react';

import './App.css';

function App() {
	const [filter, setFilter] = useState({ searchField: 'title', query: '' });

	return (
		<div className="app">
			<Navbar setFilter={setFilter} />
			<main>
				<MusicTable filter={filter} />
			</main>
		</div>
	);
}

export default App;
