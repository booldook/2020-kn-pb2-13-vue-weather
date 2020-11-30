<template lang='pug'>
	#app.container.d-flex.flex-column.justify-content-between
		nav-bar
		transition(name='fade')
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
		/*
		.fade-enter-active, .fade-leave-active {
			transition: opacity .5s;
		}
		.fade-enter, .fade-leave-to {
			opacity: 0;
		}
		*/
	}
	.wrapper {flex-grow: 1;}
</style>