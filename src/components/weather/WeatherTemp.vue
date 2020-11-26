<template lang='pug'>
	div.weather-temp.p-3.text-center
		div.p-2.temp {{temp}} ℃
		div.temp-detail 
			| 최고기온: 
			strong {{tempMin}}
			| ℃ / 최저기온: 
			strong {{tempMax}}
			| ℃
</template>

<script>
export default {
	name: 'weather-temp',
	props: ['temp', 'tempMin', 'tempMax']
}
</script>

<style lang='scss' scoped>
	.temp {font-size: 2em;}
	.temp-detail {font-size: 1.25em;}
</style>