<template lang='pug'>
	div.weather-icon.border.p-3
		img.w-100(:src='icon')
</template>

<script>
export default {
	name: 'weather-icon',
	props: ['icon']
}
</script>

<style lang='scss' scoped>
	.weather-icon {border-color: darkseagreen;}
</style>