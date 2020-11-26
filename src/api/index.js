import axios from 'axios'
import moment from 'moment'


const APP_ID = '02efdd64bdc14b279bc91d9247db4722';
const CITY_PATH = '/json/city.json'
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const ICON_URL = 'https://openweathermap.org/img/wn/'
const SEND_DATA = { units: 'metric', lang: 'kr', appid: APP_ID }

const iconGen = (icon) => {
	return ICON_URL + icon + '@2x.png';
}

const axDaily = async (val) => {
	try {
		if(typeof val === 'string') SEND_DATA.id = val
		else {
			SEND_DATA.lat = val.lat
			SEND_DATA.lon = val.lon
		}
		const r = await axios.get(DAILY_URL, { params: SEND_DATA });
		r.data.icon = iconGen(r.data.weather[0].icon);
		r.data.time = moment(r.data.dt * 1000).format('YYYY년 MM월 DD일 HH시 mm분 기준')
		console.log(r.data);
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
		//r.data.icon = iconGen(r.data.weather[0].icon);
		//r.data.time = moment(r.data.dt * 1000).format('YYYY년 MM월 DD일 HH시 mm분 기준')
		console.log(r.data);
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