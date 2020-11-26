<template lang="pug">
	weather-daily.d-flex.align-items-center.justify-content-center
</template>

<script>
import WeatherDaily from '../components/weather/WeatherDaily.vue'

export default {
	name: 'daily',
	components: {
		'weather-daily': WeatherDaily,
	}
}
</script>

<style lang="scss" scoped>

</style>