<template lang='pug'>
	div.city-wrap
		h3.city {{ city }} , {{ country }}
		h5.time(v-show='time') {{ time }}
</template>

<script>
export default {
	name: 'WeatherTitle',
	props: ['city', 'country', 'time'],
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/variables.scss";
.city-wrap {margin-top: 24px;}
.city {border-bottom: 2px solid #444; padding-bottom: 4px;}
.time {color: $greyColor; font-size: 0.875em;}
</style>