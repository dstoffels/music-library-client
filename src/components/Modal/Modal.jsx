import React from 'react';

import './Modal.css';

const Modal = ({ show, children }) => {
	return show ? (
		<div className='modal-bg'>
			<div className='modal-children'>{children}</div>
		</div>
	) : null;
};

export default Modal;
