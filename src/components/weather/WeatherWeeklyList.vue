<template lang='pug'>
	.d-flex.justify-content-start.align-items-center
		weather-icon.weather-icon(:icon='icon')
		.desc-wrap
			weather-temp(:temp='temp' :min='min' :max='max' :feel='feel')
			weather-desc.text-primary(:main='main' :desc='desc')
			weather-wind(:deg='deg' :speed='speed')
</template>

<script>
import WeatherIcon from './WeatherIcon'
import WeatherTemp from './WeatherTemp'
import WeatherDesc from './WeatherDesc'
import WeatherWind from './WeatherWind'
export default {
	name: 'WeatherWeeklyList',
	props: ['data'],
	data() {
		return { icon: '', temp: '', max: '', min: '', feel: '', main: '', desc: '', deg : '', speed: '', city: '', country: '', time: '' }
	},
	components: {
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
		'weather-desc': WeatherDesc,
		'weather-wind': WeatherWind,
	},
}
</script>

<style lang='scss' scoped>

</style>