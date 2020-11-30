<template lang="pug">
	weather-daily(:res='GET_DAILY')
</template>

<script>
import WeatherDaily from '../components/weather/WeatherDaily.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'daily',
	components: {
		'weather-daily': WeatherDaily,
	},
	created() {
		console.log(this.$store.state.selectCity);
		if(this.$route.params && this.$route.params.id)
			this.$store.dispatch('ACT_DAILY', this.$route.params.id);
		else if(this.$store.state.selectCity)
			this.$store.dispatch('ACT_DAILY', this.$store.state.selectCity);
	},
	computed: {
		...mapGetters(['GET_DAILY'])
	},
}
</script>

<style lang="scss" scoped>

</style>