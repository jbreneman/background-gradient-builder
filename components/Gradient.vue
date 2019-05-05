<template>
	<div class="gradient" :style="{ 'background-image': gradient, 'background-blend-mode': blendMode }">
		<button class="copy"
			v-clipboard:copy="css"
			v-clipboard:success="onCopy">
			{{ buttonText }}
		</button>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

export default {
	data() {
		return {
			buttonText: 'Copy CSS'
		};
	},
	computed: mapState({
		gradient(state) {
			const { colors } = state;
			return `radial-gradient(ellipse at 100% 100%, ${colors[1].color} 0%, transparent 50%), radial-gradient(ellipse at 70% 0, ${colors[2].color} 0%, transparent 50%), radial-gradient(ellipse at 30% 100%, ${colors[3].color} 0%, transparent 50%), radial-gradient(ellipse at 10% 0, ${colors[4].color} 0%, transparent 50%), linear-gradient(${colors[0].color}, ${colors[0].color})`;
		},
		blendMode: state => state.blendMode.selected,
		css(state) {
			return `${this.gradient}; background-blend-mode: ${this.blendMode};`;
		},
	}),
	methods: {
		onCopy() {
			this.buttonText = 'Copied!';

			window.setTimeout(() => {
				this.buttonText = 'Copy CSS';
			}, 2000);
		},
	}
}
</script>

<style scoped>
.gradient {
	position: relative;
	width: 100%;
	flex-grow: 1;
}
.copy {
	position: absolute;
	top: 1rem;
	right: 1rem;
	appearance: none;
	background: white;
	border: 0;
	box-shadow: 0 0 5px rgba(38, 77, 119, .25), 0 0 15px rgba(38, 77, 119, .08);
	border-radius: 3px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 1rem;
	text-transform: uppercase;
	padding: .5rem 1rem;
	cursor: pointer;
	opacity: .6;
	transition: opacity .24s ease;
}

.copy:hover {
	opacity: 1;
}
</style>
