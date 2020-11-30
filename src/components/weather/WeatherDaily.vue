<template lang='pug'>
	div.d-flex.flex-column.align-items-center.justify-content-center.text-center
		weather-title(:city='city' :country='country' :time='time')
		weather-icon.weather-icon(:icon='icon')
		weather-temp(:temp='temp' :min='min' :max='max' :feel='feel')
		weather-desc.text-primary(:main='main' :desc='desc')
		weather-wind(:deg='deg' :speed='speed')
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherTitle from './WeatherTitle.vue';
import WeatherIcon from './WeatherIcon.vue';
import WeatherTemp from './WeatherTemp.vue';
import WeatherDesc from './WeatherDesc.vue';
import WeatherWind from './WeatherWind.vue';

export default {
	name: 'weather-daily',
	props: ['res'],
	data() {
		return { icon: '', temp: '', max: '', min: '', feel: '', main: '', desc: '', deg : '', speed: '', city: '', country: '', time: '' }
	},
	components: {
		'weather-title': WeatherTitle,
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
		'weather-desc': WeatherDesc,
		'weather-wind': WeatherWind,
	},
	watch: {
		res: function (val) {
			this.icon = val.icon || ''
			this.temp = val.main ? val.main.temp : ''
			this.max = val.main ? val.main.temp_max : ''
			this.min = val.main ? val.main.temp_min : ''
			this.feel = val.main ? val.main.feels_like : ''
			this.main = val.weather ? val.weather[0].main : ''
			this.desc = val.weather ? val.weather[0].description : ''
			this.deg = val.wind ? val.wind.deg : ''
			this.speed = val.wind ? val.wind.speed : ''
			this.city = val.name ? val.name : '';
			this.country = val.sys ? val.sys.country : '';
			this.time = val.time ? val.time : '';
		}
	}
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/variables.scss";
.weather-daily {
	max-width: 600px; width: 96%; margin: 3em auto 0 auto;
	.weather-icon {margin: auto;}
	.time {color: $greyColor; font-size: 0.875em;}
}
</style>