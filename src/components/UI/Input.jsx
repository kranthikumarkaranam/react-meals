import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => (
	<div className={classes.input}>
		<label htmlFor={props.input.id}>{props.label}</label>
		<input
			ref={ref}
			{...props.input}
		/>
	</div>
));

Input.displayName = 'Input'; // Specify the display name here

export default Input;
