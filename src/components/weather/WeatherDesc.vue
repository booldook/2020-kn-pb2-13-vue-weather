<template lang='pug'>
	div.weather-desc.p-3.text-center
		div.desc {{ main }} / {{ description }} 
</template>

<script>
export default {
	name: 'weather-desc',
	props: ['main', 'description']
}
</script>

<style lang='scss' scoped>
	.desc {font-size: 1.5em;}
</style>