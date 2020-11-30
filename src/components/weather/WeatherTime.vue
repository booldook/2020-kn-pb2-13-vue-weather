<template lang='pug'>
	div.time {{ time }}
</template>

<script>
export default {
	name: 'WeatherTime',
	props: ['time']
}
</script>

<style lang='scss' scoped>
	.time {color: #777;}
</style>