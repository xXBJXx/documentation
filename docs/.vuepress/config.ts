import {defineUserConfig} from 'vuepress';
import theme from './theme';
// import {searchPlugin} from '@vuepress/plugin-search';

export default defineUserConfig({
	base: '/',

	locales: {
		'/': {
			lang: 'en-US',
			title: 'Documentation for IoBrokers Adapter from xXBJXx',
			description: 'Documentation for IoBrokers Adapter from xXBJXx',
		},
		"/de-at/": {
			lang: 'de-AT',
			title: 'Dokumentation für IoBrokers Adapter von xXBJXx',
			description: 'Dokumentation für IoBrokers Adapter von xXBJXx',
		},

	},


	plugins: [
		// searchPlugin({
		// 	locales: {
		// 		'/': {
		// 			placeholder: 'Search...',
		// 		},
		// 		'/de-at/': {
		// 			placeholder: 'Suche...',
		// 		},
		// 	},
		// 	maxSuggestions: 15,
		// }),
	],

	theme,
});
