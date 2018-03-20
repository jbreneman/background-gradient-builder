<template>
	<section class="controls">
		<ColorSelector v-for="(color, index) in colors" :index="index" :color="color.color" :label="color.label" :key="index" />
	</section>
</template>

<script>
import ColorSelector from './ColorSelector';

export default {
	components: {
		ColorSelector
	},
	computed: {
		colors() {
			return this.$store.state.colors;
		},
	}
}
</script>

<style scoped>
.controls {
	width: 100%;
	height: 80px;
	display: flex;
	box-shadow: 0 0 15px rgba(38, 13, 119, .1);
	/*border-top: 1px solid rgba(38, 13, 119, .1);
	border-bottom: 1px solid rgba(38, 13, 119, .1);*/
}
</style>
