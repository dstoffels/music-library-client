import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import MusicTable from './components/MusicTable/MusicTable.jsx';
import { useState } from 'react';

function App() {
	const [filter, setFilter] = useState({ searchField: 'title', query: '' });

	return (
		<div className='app'>
			<Navbar setFilter={setFilter} />
			<main>
				<MusicTable filter={filter} />
			</main>
		</div>
	);
}

export default App;
