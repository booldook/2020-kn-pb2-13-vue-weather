<template lang="pug">
	weather-daily.d-flex.align-items-center.justify-content-center(:res='info')
</template>

<script>
import WeatherDaily from '../components/weather/WeatherDaily.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'daily',
	data() {
		return {
			selectCity: '',
			info: null
		}
	},
	created() {
		this.selectCity = this.$route.params.id;
		this.$store.dispatch('ACT_DAILY', this.selectCity);
	},
	components: {
		'weather-daily': WeatherDaily,
	},
	computed: {
		...mapGetters(['GET_DAILY'])
	},
	watch: {
		GET_DAILY: function(val) {
			console.log("===========");
			console.log(val);
			this.info = val;
		}
	}
}
</script>

<style lang="scss" scoped>

</style>