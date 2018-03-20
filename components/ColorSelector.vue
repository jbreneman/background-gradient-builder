<template>
	<span class="color-control" v-click-outside="hidePicker">
		<button @click="togglePicker()" class="color-input" :style="{ background: color }">
			<span class="color-label">{{ label }}</span>
			<span class="color-name">{{ color }}</span>
		</button>
		<span class="picker" v-show="open">
			<no-ssr>
				<color-picker :value="color" @input="changeGradient" style="width: 100%" />
			</no-ssr>
		</span>
	</span>
</template>

<script>
import { Chrome } from 'vue-color';
import ClickOutside from 'vue-click-outside';

export default {
	components: {
		'color-picker': Chrome
	},
	directives: {
		ClickOutside
	},
	props: {
		color: {
			type: String,
			required: true
		},
		index: {
			type: Number,
			required: true
		},
		label: {
			type: String,
			required: false,
			default() {
				return 'Color';
			}
		}
	},
	data() {
		return {
			open: false
		};
	},
	methods: {
		togglePicker() {
			this.open = !this.open;
		},
		hidePicker() {
			this.open = false;
		},
		changeGradient (value) {
			this.$store.commit('changeGradient', { index: this.index, color: value.hex });
		}
	}
}
</script>

<style scoped>
.color-control {
	position: relative;
	display: flex;
	flex-grow: 1;
	flex-basis: 0;
}

.color-input {
	width: 100%;
	height: 100%;
	appearance: none;
	border: 0;
	background: white;
	font-family: 'Montserrat', sans-serif;
	font-size: .75rem;
	font-weight: 800;
	text-transform: uppercase;
	padding: .75rem 1rem;
}

.color-label {
	position: absolute;
	left: .5rem;
	top: .5rem;
	padding: .25rem .5rem;
	background: white;
}

.color-name {
	position: absolute;
	right: .5rem;
	top: .5rem;
	padding: .25rem .5rem;
	background: white;
}

.picker {
	position: absolute;
	bottom: 100%;
	right: 0;
	width: 100%;
	background-color: white;
}
</style>
