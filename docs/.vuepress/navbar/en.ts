import {navbar} from 'vuepress-theme-hope';

export const en = navbar([
	'/',
	{
		text: 'Adapter',
		icon: 'repo',
		prefix: '/',
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
