<template>
	<header class="site-header">
		<h1 class="site-heading">
			Background gradient builder
		</h1>

		<button class="settings-button" @click.prevent="toggleSettings">
			Settings
		</button>

		<SettingsPanel />
	</header>
</template>

<script>
import SettingsPanel from './SettingsPanel';
export default {
	components: { SettingsPanel },
	methods: {
		toggleSettings() {
			this.$store.commit('toggleSettings');
		}
	}
}
</script>

<style scoped>
.site-header {
	position: relative;
	grid-area: header;
	border-bottom: 1px solid rgba(38, 13, 119, .1);
	padding: 1rem;
	display: flex;
	align-items: center;
	box-shadow: 0 0 5px rgba(38, 77, 119, .25), 0 0 15px rgba(38, 77, 119, .08);
}

.site-heading {
	font-size: 1rem;
	font-weight: 800;
	font-size: 1.5rem;
	text-transform: uppercase;
	color: #260D77;
	text-shadow: 1px 1px 0 white, 2px 2px 0 #264d77, 3px 3px 0 #268d77, 4px 4px 0 #26cd77;
}

.settings-button {
	margin-left: auto;
	appearance: none;
	background: transparent;
	border: 0;
	padding: .5rem 1rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	cursor: pointer;
	opacity: .75;
	transition: opacity .24s ease;
}

.settings-button:hover {
	opacity: 1;
}
</style>
