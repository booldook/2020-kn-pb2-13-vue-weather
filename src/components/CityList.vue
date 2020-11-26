<template lang='pug'>
	.city-wrapper
		//- b-dropdown#dropdown-1(text="날씨를 확인할 도시를 선택하세요"  variant="primary" right v-model='selectCity')
		//- 	b-dropdown-item-button(v-for='v in GET_CITY' :key='v.id' :value='v.id' v-on:click='onCityChg') {{ v.name }}
		div.form-inline.text-center
			select.form-control.mx-auto(v-model='selectCity' @change='onCityChg')
				option(value='' selected) 날씨를 확인할 도시를 선택하세요
				option(v-for='v in GET_CITY' :key='v.id' :value='v.id') {{v.name}}
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
			console.log(this.selectCity);
			this.$store.dispatch('ACT_DAILY', this.selectCity);
			this.$store.dispatch('ACT_WEEKLY', this.selectCity);
		}
	},
	computed: {
		...mapGetters(['GET_CITY', 'GET_POSITION', 'GET_DAILY', 'GET_WEEKLY'])
	},
	watch: {
		GET_POSITION(val) {
			this.$store.dispatch('ACT_DAILY', {lat: val.lat, lon: val.lon});
		},
		GET_WEEKLY(val) {
			this.$router.push('/daily');
		}
	}
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/variables.scss";

.city-wrapper {width: 80%; margin: auto;}
</style>