<template>
	<span class="settings-wrap" v-click-outside="hidePopup">
		<span @click="togglePopup" class="settings-input">
			<span class="settings-label" v-if="label">{{ label }}</span>
			<slot name="settings"></slot>
		</span>
		<span class="popup" v-show="open">
			<slot name="options"></slot>
		</span>
	</span>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
	directives: {
		ClickOutside
	},
	props: {
		label: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			open: false
		};
	},
	methods: {
		togglePopup() {
			this.open = !this.open;
		},
		hidePopup() {
			this.open = false;
		}
	}
}
</script>

<style scoped>
.settings-wrap {
	position: relative;
	z-index: 2;
	height: 100%;
	padding: 1rem;
	font-family: 'Montserrat', sans-serif;
	font-size: .75rem;
	font-weight: 800;
	text-transform: uppercase;
	cursor: pointer;
	display: flex;
	transition: background-color .24s ease-out;
	border: 1px solid #dddddd;
}

.settings-wrap:hover {
	background-color: #dddddd;
}

.settings-input {
	height: 100%;
	border: 0;
	font-family: 'Montserrat', sans-serif;
	font-size: .75rem;
	font-weight: 800;
	text-transform: uppercase;
	display: flex;
	flex-direction: column;
}

.settings-label {
	padding: .25rem .5rem;
}

.popup {
	position: absolute;
	bottom: 100%;
	right: 0;
	width: 100%;
	background-color: white;
}
</style>
