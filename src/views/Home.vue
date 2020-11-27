<template lang="pug">
	.home-wrapper
		.jumbotron
			h2.text-primary Daily/Weekly Weather Information
				hr
				p.text-secondary
					small vue.js로 제작된 날씨정보 앱.
						span.text-info.ml-3 by booldook
		city-list
		weather-daily(:res='GET_DAILY')
</template>

<script>
import CityList from '../components/CityList.vue'
import WeatherDaily from '../components/weather/WeatherDaily.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'home',
	created() {
		this.$store.dispatch('ACT_POSITION');
	},
	components: {
		'city-list': CityList,
		'weather-daily': WeatherDaily,
	},
	computed: {
		...mapGetters(['GET_POSITION', 'GET_DAILY'])
	},
	watch: {
		GET_POSITION(val) {
			this.$store.dispatch('ACT_DAILY', {lat: val.lat, lon: val.lon});
		},
	}
}
</script>

<style lang="scss" scoped>
</style>