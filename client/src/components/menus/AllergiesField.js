import React from 'react';

export default ({ input, name, label }) => {
	return (
		<div>
			<label>
				{label}
			</label>
			<input type="checkbox" {...input} />
		</div>
	);
};
