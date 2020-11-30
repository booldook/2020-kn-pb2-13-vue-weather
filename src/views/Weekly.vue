<template lang="pug">
	weather-weekly(:res='GET_WEEKLY')
</template>

<script>
import WeatherWeekly from '../components/weather/WeatherWeekly.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'weekly',
	components: {
		'weather-weekly': WeatherWeekly,
	},
	created() {
		console.log(this.$store.state.selectCity);
		if(this.$route.params && this.$route.params.id)
			this.$store.dispatch('ACT_WEEKLY', this.$route.params.id);
		else if(this.$store.state.selectCity)
			this.$store.dispatch('ACT_WEEKLY', this.$store.state.selectCity);
	},
	computed: {
		...mapGetters(['GET_WEEKLY'])
	},
}
</script>

<style lang="scss" scoped>

</style>