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
	},
	methods: {
		onCityChg(e) {
			this.$router.push('/daily/'+this.selectCity);
		}
	},
	computed: {
		...mapGetters(['GET_CITY'])
	},
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/variables.scss";

.city-wrapper {width: 80%; margin: auto;}
</style>