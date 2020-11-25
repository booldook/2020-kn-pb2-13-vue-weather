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
	$lighterColor: #f1f1f1;
	$lightColor: #ddd;

	html, body, div, p, ul, li, h1, h2, h3, h4, h5 {
		margin: 0;
		padding: 0;
		list-style: none;
	}  

	#app {
		height: 100vh; 
		border-left: 1px solid $lightColor; 
		border-right: 1px solid $lightColor;
		padding: 0 !important;
	}
</style>