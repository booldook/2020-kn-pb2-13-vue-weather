<template lang='pug'>
	div.weather-desc.pb-2.text-center
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