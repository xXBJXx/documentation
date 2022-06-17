import {navbar} from 'vuepress-theme-hope';

export const de = navbar([
	'/de-at/',
	{
		text: 'Adapter',
		icon: 'repo',
		prefix: '/de-at/',
		children: [
			{
				text: 'Fully Tablet Control',
				icon: 'read',
				link: 'fully-tablet-control/description',
			},
			{
				text: 'Wallpanel',
				icon: 'read',
				link: 'wallpanel/',
			},
		],
	},
]);
