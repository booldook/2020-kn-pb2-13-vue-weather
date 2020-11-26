<template lang='pug'>
	div.weather-daily.text-center.d-flex.flex-column.justify-content-center
		weather-icon.weather-icon(:icon='icon')
		weather-temp(:temp='temp' :min='min' :max='max' :feel='feel')
		weather-desc(:main='main' :desc='desc')
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherIcon from './WeatherIcon.vue';
import WeatherTemp from './WeatherTemp.vue';
import WeatherDesc from './WeatherDesc.vue';

export default {
	name: 'weather-daily',
	data() {
		return { icon: '', temp: '', max: '', min: '', feel: '', main: '', desc: '' }
	},
	components: {
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
		'weather-desc': WeatherDesc,
	},
	computed: {
		...mapGetters(['GET_DAILY'])
	},
	watch: {
		GET_DAILY: function (val) {
			this.icon = val.icon || ''
			this.temp = val.main ? val.main.temp : ''
			this.max = val.main ? val.main.temp_max : ''
			this.min = val.main ? val.main.temp_min : ''
			this.feel = val.main ? val.main.feels_like : ''
			this.main = val.weather ? val.weather[0].main : ''
			this.desc = val.weather ? val.weather[0].description : ''
		}
	}
}
</script>

<style lang='scss' scoped>
	.weather-daily {width: 60%; margin: 3em auto 0 auto;}
	.weather-icon {max-width: 300px; margin: auto;}
</style>