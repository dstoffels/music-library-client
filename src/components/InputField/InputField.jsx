import React from 'react';

const InputField = ({ value, onChange, name, label, type = 'text', testId = '' }) => {
	return (
		<div className="mb-3">
			<label className="form-label">{label}</label>
			<input
				className="form-control"
				data-cy={testId}
				type={type}
				value={value}
				onChange={onChange}
				name={name}
			/>
		</div>
	);
};

export default InputField;
