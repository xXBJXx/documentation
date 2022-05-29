import {navbar} from 'vuepress-theme-hope';

export const de = navbar([
	'/de/',
	{
		text: 'Adapter',
		icon: 'repo',
		prefix: '/de/',
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
