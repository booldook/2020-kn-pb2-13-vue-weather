<template lang='pug'>
	div.weather-temp.p-3.text-center
		div.p-2 {{temp.now}} ℃
		span.ml-3 ({{temp.min}}℃ / {{temp.max}}℃)
</template>

<script>
export default {
	name: 'weather-temp',
	props: ['temp']
}
</script>

<style lang='scss' scoped>
	.weather-temp {border-top: 1px solid #ccc; border-bottom: 1px solid #ccc;}
</style>