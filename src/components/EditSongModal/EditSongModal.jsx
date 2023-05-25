import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import InputField from '../InputField/InputField.jsx';
import axios from 'axios';

const EditSongModal = ({ songData, setSelectedSong, fetchSongs }) => {
	const [formData, setFormData] = useState(songData);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		setFormData(songData);
	}, [songData]);

	const updateSong = async () => {
		try {
			const response = await axios.put(`http://localhost:5000/api/songs/${songData.id}`, formData);
			fetchSongs();
		} catch (error) {
			console.error(error);
		}
	};

	const handleClose = () => {
		setSelectedSong(null);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateSong();
		handleClose();
	};

	const handleDelete = async () => {
		try {
			const response = await axios.delete(`http://localhost:5000/api/songs/${songData.id}`);
			handleClose();
			fetchSongs();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal show={Boolean(songData)}>
			{formData && (
				<form onSubmit={handleSubmit} className="edit-song-form">
					<InputField value={formData.title} name="title" onChange={handleChange} label="Title" />
					<InputField
						value={formData.artist}
						name="artist"
						onChange={handleChange}
						label="Artist"
					/>
					<InputField value={formData.album} name="album" onChange={handleChange} label="Album" />
					<InputField value={formData.genre} name="genre" onChange={handleChange} label="Genre" />
					<InputField
						value={formData.release_date}
						name="release_date"
						onChange={handleChange}
						label="Release Date"
						type="date"
					/>
					<InputField
						value={formData.running_time}
						name="running_time"
						onChange={handleChange}
						label="Length"
						type="number"
					/>

					<div className="flex justify-between">
						<button onClick={handleDelete} className="btn btn-danger" data-cy="delete-song-btn">
							Delete Song
						</button>
						<div>
							<button type="submit" className="btn btn-primary">
								Update Song
							</button>
							<button onClick={handleClose} className="btn btn-warning">
								Cancel
							</button>
						</div>
					</div>
				</form>
			)}
		</Modal>
	);
};

export default EditSongModal;
