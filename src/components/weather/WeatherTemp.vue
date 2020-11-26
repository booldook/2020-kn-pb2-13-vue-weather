<template lang='pug'>
	div.weather-temp.p-3.text-center
		div.p-2.temp 
			| 현재기온: 
			strong {{temp}}
			| ℃ / 체감온도: 
			strong {{feel}}
			| ℃
		div.temp-detail 
			| 최고기온: 
			strong {{min}}
			| ℃ / 최저기온: 
			strong {{max}}
			| ℃
</template>

<script>
export default {
	name: 'weather-temp',
	props: ['temp', 'min', 'max', 'feel']
}
</script>

<style lang='scss' scoped>
	.temp {font-size: 1.5em;}
	.temp-detail {font-size: 1.25em;}
</style>