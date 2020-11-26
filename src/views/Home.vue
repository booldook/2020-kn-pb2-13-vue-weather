<template lang="pug">
	.home-wrapper
		.jumbotron
			h2.text-primary Daily/Weekly Weather Information
				hr
				p.text-secondary
					small vue.js로 제작된 날씨정보 앱.
						span.text-info.ml-3 by booldook
		city-list
		weather-daily
</template>

<script>
import CityList from '../components/CityList.vue'
import WeatherDaily from '../components/weather/WeatherDaily.vue'

export default {
	name: 'home',
	components: {
		'city-list': CityList,
		'weather-daily': WeatherDaily,
	}
}
</script>

<style lang="scss" scoped>
</style>