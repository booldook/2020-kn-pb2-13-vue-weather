<template lang='pug'>
	#app.container.d-flex.flex-column.justify-content-between
		nav-bar
		router-view.wrapper
		footer-bar
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'app',
	components: {
		'nav-bar': NavBar,
		'footer-bar': Footer,
	}
}
</script>

<style lang='scss'>
	@import "@/assets/css/normalize.scss";
	@import "@/assets/css/variables.scss";

	#app {
		height: 100vh; 
		border-left: 1px solid $lightColor; 
		border-right: 1px solid $lightColor;
		padding: 0 !important;
	}
	.wrapper {flex-grow: 1;}
</style>