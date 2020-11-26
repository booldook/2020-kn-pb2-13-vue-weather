<template lang='pug'>
	#app.container.d-flex.flex-column.justify-content-between
		div
			input.form-control(type="text" v-model="a")
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'app',
	data() {
		return {
			a: 'A',
			b: 'B',
			d: '',
			e: ''
		}
	},
	created() {
		this.d = this.a + this.b;
	},
	computed: {
		c: function(v) {
			return this.a + this.b;
		}
	},
	watch: {
		d: function(newVal) {
			console.log(newVal);
			this.e = newVal;
		}
	},
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