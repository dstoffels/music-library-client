import React from 'react';

const InputField = ({ value, onChange, name, label, type = 'text', testId = '' }) => {
	return (
		<div>
			<label>{label}</label>
			<input data-cy={testId} type={type} value={value} onChange={onChange} name={name} />
		</div>
	);
};

export default InputField;
