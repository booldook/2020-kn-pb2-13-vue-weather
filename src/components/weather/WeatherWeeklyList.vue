<template lang='pug'>
	.d-flex.justify-content-start.align-items-center
		weather-icon.weather-icon(:icon='val.icon')
		.desc-wrap
			weather-temp(:temp='val.main.temp' :min='val.main.temp_min' :max='val.main.temp_max' :feel='val.main.feels_like')
			weather-desc.text-primary(:main='val.weather[0].main' :desc='val.weather[0].description')
			//- div.time {{ `${iconGen(val.dt * 1000, 'H')}` }}
</template>

<script>
import WeatherIcon from './WeatherIcon'
import WeatherTemp from './WeatherTemp'
import WeatherDesc from './WeatherDesc'
import { iconGen, timeGen } from '../../modules/util'

export default {
	name: 'WeatherWeeklyList',
	props: ['val'],
	components: {
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
		'weather-desc': WeatherDesc,
	},
}
</script>

<style lang='scss' scoped>

</style>