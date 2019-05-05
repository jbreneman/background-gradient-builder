<template>
	<div class="layout">
		<SiteHeader />
		<main class="site-main">
			<nuxt/>
		</main>
		<footer class="site-footer">
			&copy; 2018 Jesse Breneman
		</footer>
	</div>
</template>

<script>
import SiteHeader from '../components/SiteHeader';

export default {
	components: { SiteHeader }
}
</script>

<style>
html {
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*, *:before, *:after {
	box-sizing: border-box;
	margin: 0;
}

.layout {
	overflow: hidden;
	width: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr;
	grid-template-areas: 
		'header header header'
		'main main main';
}

.site-main {
	grid-area: main;
}

.site-footer {
	grid-area: footer;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	display: none;
}
</style>
