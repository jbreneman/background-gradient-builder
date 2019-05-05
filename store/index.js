import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
		state: {
			settings: false,
			colors: [
				{
					color: '#268d77',
					label: 'Background Color'
				},
				{
					color: '#260D77',
					label: 'Color 1'
				},
				{
					color: '#4CA271',
					label: 'Color 2'
				},
				{
					color: '#660d77',
					label: 'Color 3'
				},
				{
					color: '#262d77',
					label: 'Color 4'
				},
			],
			blendMode: {
				selected: 'normal',
				options: [
					{ text: 'Normal', value: 'normal'},
					{ text: 'Multiply', value: 'multiply'},
					{ text: 'Screen', value: 'screen'},
					{ text: 'Overlay', value: 'overlay'},
					{ text: 'Darken', value: 'darken'},
					{ text: 'Lighten', value: 'lighten'},
					{ text: 'Color Dodge', value: 'color-dodge'},
					{ text: 'Color Burn', value: 'color-burn'},
					{ text: 'Hard Light', value: 'hard-light'},
					{ text: 'Soft Light', value: 'soft-light'},
					{ text: 'Difference', value: 'difference'},
					{ text: 'Exclusion', value: 'exclusion'},
				]
			}
		},
		mutations: {
			changeGradient (state, payload) {
				const { index: indexToChange, color: newColor } = payload;
				state.colors = state.colors.map((color, index) => {
					if (indexToChange === index) {
						return { ...color, color: newColor };
					}

					return color;
				});
			},
			setBlendMode (state, payload) {
				state.blendMode.selected = payload;
			},
			toggleSettings (state) {
				state.settings = !state.settings;
			}
		}
	})
}

export default createStore;