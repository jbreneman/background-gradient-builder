<template>
	<transition name="slide-in">
		<div class="settings-panel" v-if="showSettings">
			<div class="settings-content">
				<settings-wrapper label="Blend Mode">
					<span class="settings-name" slot="settings">{{ blendMode.selected }}</span>
					<ul class="settings-list" slot="options">
						<li class="settings-item" v-for="mode in blendMode.options" :key="mode.value" @click="changeBlendMode(mode.value)" :class="{ 'selected': mode.value === blendMode.selected }">
							{{ mode.text }}
						</li>
					</ul>
				</settings-wrapper>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapState } from 'vuex';
import SettingsWrapper from './SettingsWrapper';

export default {
	components: { 'settings-wrapper': SettingsWrapper },
	computed: mapState({
		blendMode: state => state.blendMode,
		showSettings: state => state.settings
	}),
	methods: {
		changeBlendMode(value) {
			this.$store.commit('setBlendMode', value);
		},
	}
}
</script>

<style>
.slide-in-enter-active, .slide-in-leave-active {
	transition: opacity .24s ease, transform .24s ease;
}

.slide-in-enter, .slide-in-leave-to {
	opacity: 0;
	transform: translate3d(0, -4px, 0);
}

.settings-panel {
	width: 100%;
	position: absolute;
	z-index: 1;
	right: 0;
	top: 100%;
	background-color: white;
}

.settings-panel::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: .75rem;
	pointer-events: none;
	background: linear-gradient(to bottom, rgba(0, 0, 0, .03), transparent);
}

.settings-content {
	display: flex;
}

.settings-list {
	list-style-type: none;
	padding: .25rem 0;
	margin: 0;
}

.settings-name {
	font-weight: 400;
	text-align: center;
}

.settings-item {
	padding: .5rem 1rem;
}

.settings-item:hover {
	background: rgba(0, 0, 0, .03);
}
</style>