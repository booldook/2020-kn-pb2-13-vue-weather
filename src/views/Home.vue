<template lang="pug">
	.home-wrapper
		.jumbotron
			h2.text-primary Daily/Weekly Weather Information
				hr
				p.text-secondary
					small vue.js로 제작된 날씨정보 앱.
						span.text-info.ml-3 by booldook
		city-list
</template>

<script>
import CityList from '../components/CityList.vue'
export default {
	name: 'home',
	components: {
		'city-list': CityList,
	}
}
</script>

<style lang="scss" scoped>
</style>