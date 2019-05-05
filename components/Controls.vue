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
	})
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
</style>
