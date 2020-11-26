<template lang='pug'>
	div.weather-daily.text-center.d-flex.flex-column
		weather-icon(:icon='GET_DAILY.icon ? GET_DAILY.icon : ""')
		weather-temp(:temp='GET_DAILY.main ? GET_DAILY.main.temp : ""' :tempMin='GET_DAILY.main ? GET_DAILY.main.temp_min : ""' :tempMax='GET_DAILY.main ? GET_DAILY.main.temp_max : ""')
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherIcon from './WeatherIcon.vue';
import WeatherTemp from './WeatherTemp.vue';

export default {
	name: 'weather-daily',
	components: {
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
	},
	computed: {
		...mapGetters(['GET_DAILY'])
	}
}
</script>

<style lang='scss' scoped>
	.weather-temp {border-top: 1px solid #ccc; border-bottom: 1px solid #ccc;}
</style>