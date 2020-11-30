<template lang="pug">
	weather-daily(:res='GET_DAILY')
</template>

<script>
import WeatherDaily from '../components/weather/WeatherDaily.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'daily',
	data() {
		return {
			selectCity: ''
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
}
</script>

<style lang="scss" scoped>

</style>