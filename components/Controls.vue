<template>
	<section class="controls">
		<div class="settings">
			<ColorSelector v-for="(color, index) in colors" :index="index" :color="color.color" :label="color.label" :key="index" />
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex';
import ColorSelector from './ColorSelector';

export default {
	components: {
		ColorSelector
	},
	computed: mapState({
		colors: state => state.colors,
	}),
	methods: {
		changeBlendMode(value) {
			this.$store.commit('setBlendMode', value);
		}
	}
}
</script>

<style scoped>
.controls {
	position: relative;
	width: 100%;
	height: 80px;
	display: flex;
	box-shadow: 0 0 5px rgba(38, 77, 119, .25), 0 0 15px rgba(38, 77, 119, .08);
}

.settings {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	background-color: white;
}

.settings-panel {
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
}

.settings-button {
	position: relative;
	z-index: 2;
	height: 100%;
	padding: 1rem;
	font-family: 'Montserrat', sans-serif;
	font-size: .75rem;
	font-weight: 800;
	text-transform: uppercase;
	cursor: pointer;
	background-color: #222222;
	color: white;
	border: none;
}

.settings-content {
	flex-grow: 1;
	display: flex;
}

.settings-name {
	font-weight: 400;
	text-align: center;
}

.settings-list {
	list-style-type: none;
	padding: .5rem 0;
}

.settings-item {
	padding: .5rem 1rem;
	font-weight: 400;
	transition: background-color .24s ease-out;
}

.settings-item:hover {
	background-color: #dddddd;
}

.selected {
	font-weight: 700;
}

.copy {
	margin-left: auto;
	transition: background-color .24s ease-out;
	border: 1px solid #dddddd;
	appearance: none;
	background-color: white;
	padding: 2rem;
	cursor: pointer;
}

.copy:hover {
	background-color: #dddddd;
}

.slide-in-enter-active, .slide-in-leave-active {
	transition: opacity .24s ease-out, transform .24s ease-out;
}

.slide-in-enter, .slide-in-leave-to {
	opacity: 0;
	transform: translate3d(20px, 0, 0);
}
</style>
