import axios from 'axios'
import moment from 'moment'

const CITY_PATH = '/json/city.json';

const axCity = async () => {
	try {
		const r = await axios.get(CITY_PATH);
		return { code: 200, data: r.data.cities } 
	}
	catch(e) {
		console.log(e);
		return { code: 500, error: e }
	}
}

export { axCity }