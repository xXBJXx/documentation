import {navbar} from 'vuepress-theme-hope';

export const en = navbar([
	'/',
	// { text: "Guide", icon: "creative", link: "/lang/en/guide/" },
	// { text: "Fully Tablet Control", icon: "book", link: "/fully-tablet-control/" },
	// { text: "Wallpanel", icon: "book", link: "/wallpanel/" },
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
	// {
	//   text: "Posts",
	//   icon: "edit",
	//   prefix: "/posts/",
	//   children: [
	//     {
	//       text: "Articles 1-4",
	//       icon: "edit",
	//       prefix: "article/",
	//       children: [
	//         { text: "Article 1", icon: "edit", link: "article1" },
	//         { text: "Article 2", icon: "edit", link: "article2" },
	//         "article3",
	//         "article4",
	//       ],
	//     },
	//     {
	//       text: "Articles 5-12",
	//       icon: "edit",
	//       children: [
	//         {
	//           text: "Article 5",
	//           icon: "edit",
	//           link: "article/article5",
	//         },
	//         {
	//           text: "Article 6",
	//           icon: "edit",
	//           link: "article/article6",
	//         },
	//         "article/article7",
	//         "article/article8",
	//       ],
	//     },
	//     { text: "Article 9", icon: "edit", link: "article9" },
	//     { text: "Article 10", icon: "edit", link: "article10" },
	//     "article11",
	//     "article12",
	//   ],
	// },
	// {
	//   text: "Theme Docs",
	//   icon: "note",
	//   link: "https://vuepress-theme-hope.github.io/v2/",
	// },
]);
