<template lang='pug'>
	div.weather-icon.border.p-3
		img.w-100(:src='src')
</template>

<script>
export default {
	name: 'weather-icon',
	props: ['src']
}
</script>

<style lang='scss' scoped>
	.weather-icon {border-color: darkseagreen;}
</style>