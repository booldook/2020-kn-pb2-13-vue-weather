<template lang='pug'>
	div.weather-wind.text-center
		i.fa.fa-arrow-down.mr-1(:style='`transform: rotate(${-deg}deg)`')
		span
			strong {{speed}} 
			span.ml-1 ㎧
</template>

<script>
export default {
	name: 'weather-temp',
	props: ['deg', 'speed']
}
</script>

<style lang='scss' scoped>
	.weather-wind {font-size: 1.25em;}
</style>