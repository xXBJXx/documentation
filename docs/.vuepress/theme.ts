import {hopeTheme} from 'vuepress-theme-hope';
import * as navbar from './navbar';
import * as sidebar from './sidebar';

const license = 'MIT Licensed | Copyright © 2021-2022 - xXBJXx️';

export default hopeTheme({
	hostname: "https://xxbjxx.github.io/",

	author: {
		name: 'xXBJXx',
		// url: "https://mrhope.site",
	},

	iconAssets: '//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css',
	// iconAssets: 'fontawesome',

	logo: '/ioBroker.svg',

	repo: 'https://github.com/xXBJXx/',
	docsRepo: 'https://github.com/xXBJXx/documentation',
	docsBranch: 'main',
	docsDir: 'docs',
	// Customising the header label
	// Defaults to "GitHub" / "GitLab" / "Gitee" / "Bitbucket" or "Source" depending on `repo`
	repoLabel: 'GitHub',
	// Whether to display repo link, default is `true`
	repoDisplay: true,

	// pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
	pageInfo: ['Author', 'Original', 'Date', 'Category', 'ReadingTime'],

	locales: {
		'/': {
			// navbar
			navbar: navbar.en,

			// sidebar
			sidebar: sidebar.en,

			footer: license,
			copyright: false,

			displayFooter: true,

			metaLocales: {
				toc: 'Table of Contents',
			},
		},

		"/de-at/": {
			// navbar
			navbar: navbar.de,

			// sidebar
			sidebar: sidebar.de,

			footer: license,
			copyright: false,

			displayFooter: true,

			metaLocales: {
				toc: 'Inhaltsverzeichnis',
			},
		},
	},

	// encrypt: {
	//   config: {
	//     "lang/guide/encrypt.html": ["1234"],
	//     "lang/de/guide/encrypt.html": ["1234"],
	//   },
	// },

	plugins: {

		// blog: {
		// 	autoExcerpt: false,
		// },

		// If you don't need comment feature, you can remove following option
		// The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
		// To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
		// comment: {
		//   /**
		//    * Using giscus
		//    */
		//   type: "giscus",
		//   repo: "vuepress-theme-hope/giscus-discussions",
		//   repoId: "R_kgDOG_Pt2A",
		//   category: "Announcements",
		//   categoryId: "DIC_kwDOG_Pt2M4COD69",
		//
		//   /**
		//    * Using twikoo
		//    */
		//   // type: "twikoo",
		//   // envId: "https://twikoo.ccknbc.vercel.app",
		//
		//   /**
		//    * Using Waline
		//    */
		//   // type: "waline",
		//   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
		// },



		mdEnhance: {
			align: true,
			linkCheck: 'always',
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
			},
		},
	},
});
