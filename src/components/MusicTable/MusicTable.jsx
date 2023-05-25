import axios from 'axios';
import React, { useEffect, useState } from 'react';

import SongForm from '../SongForm/SongForm.jsx';
import SongRow from '../SongRow/SongRow.jsx';
import EditSongModal from '../EditSongModal/EditSongModal.jsx';

const MusicTable = ({ filter }) => {
	const [songData, setSongData] = useState({ songs: [], total_running_time: '' });
	const [selectedSong, setSelectedSong] = useState(null);

	const fetchSongs = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/songs');
			setSongData(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchSongs();
	}, []);

	const songRows = songData.songs
		.filter((song) => song[filter.searchField].toLowerCase().includes(filter.query))
		.map((song, i) => <SongRow song={song} key={`song-${i}`} setSelectedSong={setSelectedSong} />);

	return (
		<div>
			<SongForm fetchSongs={fetchSongs} />
			<EditSongModal
				songData={selectedSong}
				setSelectedSong={setSelectedSong}
				fetchSongs={fetchSongs}
			/>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Genre</th>
						<th>Release Date</th>
						<th>Length</th>
					</tr>
				</thead>
				<tbody>{songRows}</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<th>Total Play Time:</th>
						<th>{songData.total_running_time}</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default MusicTable;
