<template lang='pug'>
	div.weather-icon.mt-2
		img.w-100(:src='icon')
</template>

<script>
export default {
	name: 'weather-icon',
	props: ['icon']
}
</script>

<style lang='scss' scoped>
	
</style>