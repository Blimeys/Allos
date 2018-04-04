import axios from 'axios';
import { NEW_LOCATION } from './types';

export const submitLocation = (values, history) => async dispatch => {
	console.log(values)
	const res = await axios.post('/api/new/userlocations', {
		location: values.location.toLowerCase(),
		streetAddress: values.streetAddress,
		description: values.description,
		externalUrl: values.externalUrl
	});
	if (!res.data.error) {
		history.push('/home');
		dispatch({ type: NEW_LOCATION, payload: res.data });
	} else if (res.data.error) {
		const locationExist = { newLocationError: true };
		dispatch({ type: NEW_LOCATION, payload: locationExist });
	}
};
export const testNewLocation = values => async dispatch => {
	const res = await axios.post('/api/userlocations', {
		location: values.toLowerCase()
	});
	if (!res.data.error) {
		dispatch({ type: NEW_LOCATION, payload: res.data });
	} else if (res.data.error) {
		dispatch({ type: NEW_LOCATION, payload: res.data });
	}
};
export const resetNewLocationData = () => async dispatch => {
	dispatch({ type: NEW_LOCATION, payload: [] });
};
