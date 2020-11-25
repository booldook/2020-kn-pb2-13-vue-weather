<template lang='pug'>
	.city-wrapper
		select.form-control
			option(value='' selected) 날씨정보를 보고싶은 도시를 선택하세요.
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import "@/assets/css/variables.scss";

.city-wrapper {width: 80%; margin: auto;}
</style>