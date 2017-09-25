import React from 'react';

export default ({ input, name }) => {
	return (
		<div>
			<label>
				{name}
			</label>
			<input type="checkbox" {...input} />
		</div>
	);
};
