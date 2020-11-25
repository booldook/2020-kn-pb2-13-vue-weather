<template lang='pug'>
	.city-wrapper
		select.form-control(v-model='selectCity' @:change='onCityChg')
			option(value='' selected) 날씨정보를 보고싶은 도시를 선택하세요.
			option(v-for='v in GET_CITY' :key='v.id' :value='v.id') {{ v.name }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
	name: 'cityList',
	data() {
		return {
			selectCity: '',
		}
	},
	created() {
		this.$store.dispatch('ACT_CITY');
		this.$store.dispatch('ACT_POSITION');
	},
	methods: {
		onCityChg(e) {
			this.$store.dispatch('ACT_DAILY', this.selectCity);
			this.$store.dispatch('ACT_WEEKLY', this.selectCity);
		}
	},
	computed: {
		...mapGetters(['GET_CITY', 'GET_POSITION', 'GET_DAILY', 'GET_WEEKLY'])
	},
	watch: {
		GET_POSITION(newValue, oldValue) {
			alert(`lat: ${newValue.lat}, lon: ${newValue.lon}`);
		}
	}
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/variables.scss";

.city-wrapper {width: 80%; margin: auto;}
</style>