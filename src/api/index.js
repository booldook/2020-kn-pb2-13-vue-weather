import axios from 'axios'
import moment from 'moment'

const CITY_PATH = '/json/city.json';

const axCity = async () => {
	try {
		const r = await axios.get(CITY_PATH);
		return r.data.cities 
	}
	catch(e) {
		console.log(e);
		return { code: 500, error: e }
	}
}

const getLocation = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((r) => {
			resolve({ error: null, lat: r.coords.latitude, lon: r.coords.longitude });
		}, (e) => {
			reject({ error: e, lat: null, lon: null })
		});
	})
}

export { axCity, getLocation }