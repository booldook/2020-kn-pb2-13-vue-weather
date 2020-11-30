<template lang='pug'>
	div.d-flex.flex-column.align-items-center.justify-content-center.text-center
		weather-title(:city='city' :country='country' :time='time')
		ul.list-wrap.f-flex.flex-column.align-items-start.justify-content-start
			li.list(v-for='v in list')
				weather-weekly-list(:data='v')
</template>

<script>
import WeatherTitle from './WeatherTitle.vue'
import WeatherWeeklyList from './WeatherWeeklyList'
export default {
	name: 'WeatherWeekly',
	props: ['res'],
	data() {
		return { city: '', country: '', time: null, list: null }
	},
	components: {
		'weather-title': WeatherTitle,
		'weather-weekly-list': WeatherWeeklyList,
	},
	watch: {
		res: function (val) {
			console.log(val)
			this.city = val.city ? val.city.name : ''
			this.country = val.city ? val.city.country : ''
			this.list = val.list ? val.list : []
		}
	}
}
</script>

<style lang="scss" scoped>
	.list-wrap {
		width: 100%;
		height: calc(100vh - 153px);
		overflow-y: auto;
		.list {border-bottom: 1px solid #ccc; padding: 0.5em;}
	}
</style>