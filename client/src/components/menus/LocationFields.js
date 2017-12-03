import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<input {...input} placeholder={label} />
			<div style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
