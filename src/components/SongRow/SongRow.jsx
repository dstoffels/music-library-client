import React, { useState } from 'react';

const SongRow = ({ song, setSelectedSong }) => {
	const handleClick = () => setSelectedSong(song);

	return (
		<tr onClick={handleClick}>
			<td>{song.title}</td>
			<td>{song.artist}</td>
			<td>{song.album}</td>
			<td>{song.genre}</td>
			<td>{song.release_date}</td>
			<td>{`${Math.trunc(song.running_time / 60)}:${String(song.running_time % 60).padStart(
				2,
				0,
			)}`}</td>
		</tr>
	);
};

export default SongRow;
