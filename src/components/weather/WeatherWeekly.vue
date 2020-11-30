<template lang='pug'>
	div.d-flex.flex-column.align-items-center.justify-content-center.text-center
		weather-title(:city='city' :country='country' :time='time')
</template>

<script>
import WeatherTitle from './WeatherTitle.vue';
export default {
	name: 'WeatherWeekly',
	props: ['res'],
	data() {
		return { city: '', country: '', time: null }
	},
	components: {
		'weather-title': WeatherTitle,
	},
	watch: {
		res: function (val) {
			console.log(val);
			this.city = val.city ? val.city.name : '';
			this.country = val.city ? val.city.country : '';
		}
	}
}
</script>

<style lang="scss" scoped>

</style>