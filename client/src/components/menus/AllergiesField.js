import React from 'react';

export default ({ input, name, label }) => {
	return (
		<div className="control-group">
			<label className="control control--checkbox">
				{label}
				<input type="checkbox" {...input} />
				<div className="control__indicator"></div>
			</label>


		</div>
	);
};
