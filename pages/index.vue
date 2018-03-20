<template>
	<section class="main">
		<Gradient />
		<Controls />
	</section>
</template>

<script>
import Gradient from '../components/Gradient';
import Controls from '../components/Controls';

export default {
	components: {
		Gradient,
		Controls,
	},
	computed: {
		test() {
			return this.$store.state.counter;
		}
	}
}
</script>

<style scoped>
.main {
	display: flex;
	flex-direction: column;
	height: 100%;
}
</style>
