import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Demo = ({}) => {
	const [songs, setSongs] = useState([]);

	async function fetchSongs() {
		const response = await axios.get('http://127.0.0.1:5000/api/songs');
		setSongs(response.data.songs);
	}

	useEffect(() => {
		fetchSongs();
	}, []);

	async function addSong() {
		const newSong = {
			title: 'abc',
			artist: 'Tucker',
			album: 'DCC',
			release_date: '2017-01-05',
			running_time: 256,
			genre: 'Rock',
		};

		const response = await axios.post('http://127.0.0.1:5000/api/songs', newSong);
		if (response.status === 201) {
			fetchSongs();
		}
	}

	return (
		<div>
			<button onClick={addSong}>Add Song</button>
			{songs.map((song) => (
				<p>{song.title}</p>
			))}
		</div>
	);
};

export default Demo;
