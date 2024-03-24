import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onClose }) => (
	<Fragment>
		<div
			className={classes.backdrop}
			onClick={onClose}
			onKeyDown={(event) => {
				if (event.key === 'Escape') {
					onClose();
				}
			}}
			role='button' // Add role="button" to indicate the element is interactive
			tabIndex={0} // Add tabIndex={0} to make it focusable
		/>
	</Fragment>
);

const ModalOverlay = ({ children }) => (
	<div className={classes.modal}>
		<div className={classes.content}>{children}</div>
	</div>
);

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose }) => (
	<Fragment>
		{ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
		{ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
	</Fragment>
);

export default Modal;
