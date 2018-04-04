import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<input {...input} placeholder={label} />
			<div className="form-warning">
				{touched && error}
			</div>
		</div>
	);
};
