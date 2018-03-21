<template>
	<section class="controls">
		<ColorSelector v-for="(color, index) in colors" :index="index" :color="color.color" :label="color.label" :key="index" />
		<transition name="slide-in">
			<div class="settings" v-if="showSettings">
				<div class="settings-content">
					<settings-wrapper label="Blend Mode">
						<span class="settings-name" slot="settings">{{ blendMode.selected}}</span>
						<ul class="settings-list" slot="options">
							<li class="settings-item" v-for="mode in blendMode.options" :key="mode.value" @click="changeBlendMode(mode.value)" :class="{ 'selected': mode.value === blendMode.selected }">
								{{ mode.text }}
							</li>
						</ul>
					</settings-wrapper>
					
					<button class="copy">
						Copy CSS
					</button>
				</div>
				<button class="settings-button">
					Settings
				</button>
			</div>
		</transition>
		<button class="settings-button" @click="toggleSettings">
			Settings
		</button>
	</section>
</template>

<script>
import { mapState } from 'vuex';
import ColorSelector from './ColorSelector';
import SettingsWrapper from './SettingsWrapper';

export default {
	components: {
		ColorSelector,
		'settings-wrapper': SettingsWrapper,
	},
	data() {
		return {
			showSettings: false
		};
	},
	computed: mapState({
		colors: state => state.colors,
		blendMode: state => state.blendMode
	}),
	methods: {
		toggleSettings() {
			this.showSettings = !this.showSettings;
		},
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
	box-shadow: 0 0 15px rgba(38, 13, 119, .1);
}

.settings {
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
	background-color: white;
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

.slide-in-enter-active, .slide-in-leave-active {
	transition: opacity .24s ease-out, transform .24s ease-out;
}

.slide-in-enter, .slide-in-leave-to {
	opacity: 0;
	transform: translate3d(20px, 0, 0);
}
</style>
