import React, { useState } from 'react';
import InputField from '../InputField/InputField.jsx';
import axios from 'axios';

const SongForm = ({ fetchSongs }) => {
	const [show, setShow] = useState(false);
	const [formData, setFormData] = useState({
		title: '',
		artist: '',
		album: '',
		genre: '',
		release_date: '',
		running_time: '',
	});

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const addSong = async () => {
		try {
			const response = await axios.post('http://localhost:5000/api/songs', formData);
			if (response.status === 201) fetchSongs();
		} catch (error) {
			console.error(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addSong();
		handleClose();
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="py-3">
			{show ? (
				<form className="song-form" onSubmit={handleSubmit}>
					<InputField
						testId="add-song-input_title"
						label="Title"
						onChange={handleChange}
						name="title"
						value={formData.title}
					/>
					<InputField
						testId="add-song-input_artist"
						label="Artist"
						onChange={handleChange}
						name="artist"
						value={formData.artist}
					/>
					<InputField
						testId="add-song-input_album"
						label="Album"
						onChange={handleChange}
						name="album"
						value={formData.album}
					/>
					<InputField
						testId="add-song-input_genre"
						label="Genre"
						onChange={handleChange}
						name="genre"
						value={formData.genre}
					/>
					<InputField
						testId="add-song-input_release_date"
						label="Release Date"
						type="date"
						onChange={handleChange}
						name="release_date"
						value={formData.release_date}
					/>
					<InputField
						testId="add-song-input_length"
						label="Length"
						type="number"
						onChange={handleChange}
						name="running_time"
						value={formData.running_time}
					/>
					<div className="mb-3 flex justify-end">
						<button data-cy="add-song-submit" className="btn btn-primary" type="submit">
							Add Song
						</button>
						<button onClick={handleClose} className="btn btn-danger" type="button">
							Cancel
						</button>
					</div>
				</form>
			) : (
				<div className="flex justify-end">
					<button data-cy="add-song-toggle-btn" className="btn btn-primary" onClick={handleShow}>
						Add Song
					</button>
				</div>
			)}
		</div>
	);
};

export default SongForm;
