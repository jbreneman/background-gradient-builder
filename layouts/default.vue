<template>
	<div class="layout">
		<header class="site-header">
			Background gradient builder
		</header>
		<main class="site-main">
			<nuxt/>
		</main>
		<footer class="site-footer">
			&copy; 2018 Jesse Breneman
		</footer>
	</div>
</template>

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
	width: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr;
	grid-template-areas: 
		'header header header'
		'main main main';
}

.site-header {
	grid-area: header;
	box-shadow: 0 0 15px rgba(38, 13, 119, .1);
	border-bottom: 1px solid rgba(38, 13, 119, .1);
	padding: 1rem;
	display: flex;
	align-items: center;
	font-weight: 800;
	font-size: 1.5rem;
	text-transform: uppercase;
	color: #260D77;
	text-shadow: 1px 1px 0 white, 2px 2px 0 #264d77, 3px 3px 0 #268d77, 4px 4px 0 #26cd77;
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
