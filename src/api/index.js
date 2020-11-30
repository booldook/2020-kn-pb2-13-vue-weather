import axios from 'axios'
import { iconGen, timeGen } from '../modules/util'

const APP_ID = '02efdd64bdc14b279bc91d9247db4722';
const CITY_PATH = '/json/city.json'
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const SEND_DATA = { units: 'metric', lang: 'kr', appid: APP_ID }

const axDaily = async (val) => {
	try {
		if(typeof val === 'string') {
			SEND_DATA.id = val
			SEND_DATA.lat = null
			SEND_DATA.lon = null
		}
		else {
			SEND_DATA.lat = val.lat
			SEND_DATA.lon = val.lon
			SEND_DATA.id = null
		}
		const r = await axios.get(DAILY_URL, { params: SEND_DATA });
		r.data.icon = iconGen(r.data.weather[0].icon);
		r.data.time = timeGen(r.data.dt * 1000, 'M') + ' 기준'
		return r.data;
	}
	catch(e) {
		console.log(e);
		return { code: 500, error: e }
	}
}

const axWeekly = async (val) => {
	try {
		SEND_DATA.id = val
		const r = await axios.get(WEEKLY_URL, { params: SEND_DATA });
		r.data.title = r.data.city.name + ', ' + r.data.city.country;
		for(let v of r.data.list) {
			v.icon = iconGen(v.weather[0].icon);
			v.time = timeGen(v.dt * 1000, 'H') + ' 기준'
		}
		return r.data;
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

export { axCity, getLocation, axDaily, axWeekly }