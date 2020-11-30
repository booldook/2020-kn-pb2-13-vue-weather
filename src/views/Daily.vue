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
		if(this.$route.params && this.$route.params.id) {
			this.$store.dispatch('ACT_DAILY', this.$route.params.id);
		}
	},
	computed: {
		...mapGetters(['GET_DAILY', 'GET_SEL_CITY'])
	},
	watch: {
		GET_SEL_CITY: function(v) {
			this.$store.dispatch('ACT_DAILY', v);
		}
	}
}
</script>

<style lang="scss" scoped>

</style>