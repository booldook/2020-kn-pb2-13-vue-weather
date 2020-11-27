<template lang='pug'>
	div.weather-desc.text-center
		div.desc {{ main }} / {{ desc }} 
</template>

<script>
export default {
	name: 'weather-desc',
	props: ['main', 'desc']
}
</script>

<style lang='scss' scoped>
	.desc {font-size: 1.5em;}
</style>