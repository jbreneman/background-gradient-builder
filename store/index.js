import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
		state: {
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
			]
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
			}
		}
	})
}

export default createStore;