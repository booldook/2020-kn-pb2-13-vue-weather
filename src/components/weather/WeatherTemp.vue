<template lang='pug'>
	div.weather-temp.p-3.text-center
		div.p-2 {{temp}} ℃
		span.ml-3 ({{tempMin}}℃ / {{tempMax}}℃)
</template>

<script>
export default {
	name: 'weather-temp',
	props: ['temp', 'tempMin', 'tempMax']
}
</script>

<style lang='scss' scoped>
	.weather-temp {border-top: 1px solid #ccc; border-bottom: 1px solid #ccc;}
</style>