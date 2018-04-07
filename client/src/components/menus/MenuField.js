import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div key={label}>
			<input {...input} placeholder={label} />
			<div className="form-warning">
				{touched && error}
			</div>
		</div>
	);
};
