import {defineUserConfig} from 'vuepress';
import {searchPlugin} from '@vuepress/plugin-search';
import theme from './theme';

export default defineUserConfig({
	base: '/',

	locales: {
		'/': {
			lang: 'en-US',
			title: 'Documentation for IoBrokers Adapter from xXBJXx',
			description: 'Documentation for IoBrokers Adapter from xXBJXx',
		},
		'/de/': {
			lang: 'de-DE',
			title: 'Dokumentation für IoBrokers Adapter von xXBJXx',
			description: 'Dokumentation für IoBrokers Adapter von xXBJXx',
		},
	},

	plugins: [
		[
			searchPlugin({
				locales: {
					'/': {
						placeholder: 'Search...',
					},
					'/de/': {
						placeholder: 'Suche...',
					},
				},
				maxSuggestions: 15,
			}),
		],
	],

	theme,
});
