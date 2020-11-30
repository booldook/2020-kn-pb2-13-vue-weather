import moment from 'moment'

const ICON_URL = 'https://openweathermap.org/img/wn/'

const iconGen = (icon) => {
	return ICON_URL + icon + '@2x.png';
}

const timeGen = (dt, mode='I') => {
	let format;
	switch (mode) {
		case 'I':
			format = 'YYYY-MM-DD HH:mm:ss'
			break;
		case 'D': 
			format = 'YYYY년 MM월 DD일'
			break;
		case 'H': 
			format = 'YYYY년 MM월 DD일 HH시'
			break;
		case 'M':
			format = 'YYYY년 MM월 DD일 HH시 mm분'
			break;
		case 'S':
			format = 'YYYY년 MM월 DD일 HH시 mm분 ss초'
			break;
	}
	return moment(dt).format(format);
}

export { iconGen, timeGen }