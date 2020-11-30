<template lang='pug'>
	div.d-flex.flex-column.align-items-center.justify-content-center.text-center
		weather-title(:city='city' :country='country' :time='time')
		div.list-wrap.f-flex.flex-column.align-items-start.justify-content-start
			weather-weekly-list.list(v-for='v in list' :val='v')
</template>

<script>
import WeatherTitle from './WeatherTitle.vue'
import WeatherWeeklyList from './WeatherWeeklyList'
export default {
	name: 'WeatherWeekly',
	props: ['res'],
	data() {
		return { city: '', country: '', time: null, list: [], idx: 0 }
	},
	components: {
		'weather-title': WeatherTitle,
		'weather-weekly-list': WeatherWeeklyList,
	},
	watch: {
		res: function (val) {
			this.city = val.city ? val.city.name : ''
			this.country = val.city ? val.city.country : ''
			this.list = val.list.length > 0 ? val.list : []
			console.log(this.list);
		}
	}
}
</script>

<style lang="scss" scoped>
	.list-wrap {
		width: 100%;
		height: calc(100vh - 184px);
		overflow-y: auto;
		.list {border-bottom: 1px solid #ccc; padding: 0.25em;}
	}
</style>