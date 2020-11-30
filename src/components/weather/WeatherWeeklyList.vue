<template lang='pug'>
	.d-flex.justify-content-start.align-items-center
		weather-icon.weather-icon(:icon='val.icon')
		.desc-wrap.d-flex.flex-column
			weather-temp.weather-temp.text-left(:temp='val.main.temp' :min='val.main.temp_min' :max='val.main.temp_max' :feel='val.main.feels_like')
			weather-desc.weather-desc.text-primary(:main='val.weather[0].main' :desc='val.weather[0].description')
			weather-time.weather-time(:time='val.time')
</template>

<script>
import WeatherIcon from './WeatherIcon'
import WeatherTemp from './WeatherTemp'
import WeatherDesc from './WeatherDesc'
import WeatherTime from './WeatherTime'
import { iconGen, timeGen } from '../../modules/util'

export default {
	name: 'WeatherWeeklyList',
	props: ['val'],
	components: {
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
		'weather-desc': WeatherDesc,
		'weather-time': WeatherTime,
	},
}
</script>

<style lang='scss' scoped>
.weather-icon {margin-left: 1em;}
@media screen and (max-width: 767px) {
	.weather-temp {font-size: 0.875em;}
	.weather-desc {font-size: 0.875em;}
}
@media screen and (max-width: 575px) {
	.weather-icon {margin-left: 0;}
	.weather-temp {font-size: 0.6em;}
	.weather-desc {font-size: 0.6em;}
}
</style>