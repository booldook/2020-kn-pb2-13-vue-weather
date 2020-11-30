<template lang='pug'>
	.d-flex.justify-content-start.align-items-center
		weather-icon.weather-icon.mr-3(:icon='val.icon')
		.desc-wrap.d-flex.flex-column.align-items-start
			weather-temp(:temp='val.main.temp' :min='val.main.temp_min' :max='val.main.temp_max' :feel='val.main.feels_like')
			weather-desc.pl-4.text-primary(:main='val.weather[0].main' :desc='val.weather[0].description')
			weather-time.pl-4(:time='val.time')
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

</style>