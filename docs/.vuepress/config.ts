import {defineUserConfig} from 'vuepress';
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
			lang: 'en-US',
			title: 'Dokumentation für IoBrokers Adapter von xXBJXx',
			description: 'Dokumentation für IoBrokers Adapter von xXBJXx',
		},
	},

	theme,
});
