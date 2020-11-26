import axios from 'axios'
import moment from 'moment'
import dotenv from 'dotenv';
dotenv.config();

// '@2x.png'
const CITY_PATH = '/json/city.json'
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const SEND_DATA = { units: 'metric', lang: 'kr', appid: process.env.APP_ID }
const ICON_URL = 'https://openweathermap.org/img/wn/'


const axDaily = async (val) => {
	try {
		const r = await axios.get(DAILY_URL, val)
		return ;
	}
	catch(e) {
		console.log(e);
		return { code: 500, error: e }
	}
}

const axCity = async () => {
	try {
		const r = await axios.get(CITY_PATH)
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