import React from 'react';

const InputField = ({ value, onChange, name, label, type = 'text', testId = '' }) => {
	return (
		<div className="mb-3">
			<label className="form-label">{label}</label>
			<input
				data-cy={testId}
				className="form-control"
				type={type}
				value={value}
				onChange={onChange}
				name={name}
			/>
		</div>
	);
};

export default InputField;
