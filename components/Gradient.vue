<template>
	<div class="gradient" :style="{ 'background-image': gradient, 'background-blend-mode': blendMode }">
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: mapState({
		gradient(state) {
			const { colors } = state;
			return `radial-gradient(ellipse at 100% 100%, ${colors[1].color} 0%, transparent 50%), radial-gradient(ellipse at 70% 0, ${colors[2].color} 0%, transparent 50%), radial-gradient(ellipse at 30% 100%, ${colors[3].color} 0%, transparent 50%), radial-gradient(ellipse at 10% 0, ${colors[4].color} 0%, transparent 50%), linear-gradient(${colors[0].color}, ${colors[0].color})`;
		},
		blendMode: state => state.blendMode.selected
	})
}
</script>

<style scoped>
.gradient {
	width: 100%;
	flex-grow: 1;
}
</style>
