// const {description} = require('../../package')
const fs = require('fs');
const path = require('path');
let name = []
const translationArray = {}
const items = [
	{text: 'Fully Tablet Control', link: '/language/en/Fully-Tablet-Control/01.description'},
	{text: 'E-Control.at Fuel', link: '/language/en/e-control-at-fuel/01.description'},
	{text: 'Wallpanel', link: '/language/en/Wallpanel/01.description'},
];
itemTranslator(items);


module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	// title: 'xXBJXx ioBroker Adapter Dokumentationen',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	// description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', {name: 'theme-color', content: '#3eaf7c'}],
		['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
		['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
	],
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'en-US', // this will be set as the lang attribute on <html>
			title: 'ioBroker Adapter Documentation',
			description: 'Documentation for IoBrokers adapters of xXBJXx'
		},
		'/language/de/': {
			lang: 'de-DE',
			title: 'ioBroker Adapter Dokumentationen',
			description: 'Dokumentation für IoBrokers-Adapter von xXBJXx'
		}
	},
	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		repo: 'https://github.com/xXBJXx/documentation',
		editLinks: true,
		// docsDir: '',
		// editLinkText: '',
		logo: '/images/ioBroker.svg',
		smoothScroll: true,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				// nav: [
				// 	{
				// 		text: 'Adapter',
				// 		items: [
				// 			{
				// 				text: 'Fully Tablet Control',
				// 				link: '/language/en/Fully-Tablet-Control/description'
				// 			},
				// 			{
				// 				text: 'E-Control.at Fuel',
				// 				link: '/language/en/e-control-at-fuel/description'
				// 			},
				// 			{
				// 				text: 'Wallpanel',
				// 				link: '/language/en/Wallpanel/description'
				// 			},
				// 		]
				// 	}
				// ],
				nav: [
					{
						text: 'Adapter',
						ariaLabel: 'Languages',
						items: translationArray['EN']
					},
					// {text: 'Support Me', link: ''},
				],
				sidebar: [
					{

						title: 'Fully Tablet Control',   // required
						path: '/language/en/Fully-Tablet-Control/01.description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: getSideBar(
							'/language/en/Fully-Tablet-Control/'
						),
					},
					{

						title: 'E-Control.at Fuel',   // required
						path: '/language/en/e-control-at-fuel/01.description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: getSideBar(
							'/language/en/e-control-at-fuel/'
						),
					},
					{

						title: 'Wallpanel',   // required
						path: '/language/en/Wallpanel/01.description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: getSideBar(
							'/language/en/Wallpanel/'
						),
					}
				],
				// sidebar: {
				// 	'/language/en/Wallpanel/': getSideBar(
				// 		'/language/en/Wallpanel/',
				// 		'/language/en/Wallpanel/01.description',
				// 		'Wallpanel',
				// 		false,
				// 		1,
				// 	),
				// 	'/language/en/e-control-at-fuel/': getSideBar(
				// 		'/language/en/e-control-at-fuel/',
				// 		'/language/en/e-control-at-fuel/01.description',
				// 		'E-Control.at Fuel',
				// 		false,
				// 		1,
				// 	),
				// 	'/language/en/Fully-Tablet-Control/': getSideBar(
				// 		'/language/en/Fully-Tablet-Control/',
				// 		'/language/en/Fully-Tablet-Control/01.description',
				// 		'Fully Tablet Control',
				// 		false,
				// 		1,
				// 	),
				// },
				// sidebar: [
				// 	{
				// 		title: 'Fully Tablet Control',   // required
				// 		path: '/language/en/Fully-Tablet-Control/description',      // optional, link of the title, which should be an absolute path and must exist
				// 		collapsable: true, // optional, defaults to true
				// 		sidebarDepth: 1,    // optional, defaults to 1
				// 		children: [
				// 			'/language/en/Fully-Tablet-Control/description',
				// 			'/language/en/Fully-Tablet-Control/Login',
				// 			'/language/en/Fully-Tablet-Control/Ladegeraet',
				// 			'/language/en/Fully-Tablet-Control/brightness',
				// 			'/language/en/Fully-Tablet-Control/Bildschirmschoner',
				// 			'/language/en/Fully-Tablet-Control/Telegram',
				// 			'/language/en/Fully-Tablet-Control/Bewegungsmelder',
				// 			'/language/en/Fully-Tablet-Control/ObjectsTree',
				// 			'/language/en/Fully-Tablet-Control/camera_shot',
				// 			'/language/en/Fully-Tablet-Control/Vis-View',
				// 			'/language/en/Fully-Tablet-Control/TODO',
				// 			'/language/en/Fully-Tablet-Control/CHANGELOG',
				// 		]
				// 	},
				// 	{
				// 		title: 'E-Control.at Fuel',   // required
				// 		path: '/language/en/e-control-at-fuel/description',      // optional, link of the title, which should be an absolute path and must exist
				// 		collapsable: true, // optional, defaults to true
				// 		sidebarDepth: 1,    // optional, defaults to 1
				// 		children: [
				// 			'/language/en/e-control-at-fuel/description',
				// 			'/language/en/e-control-at-fuel/TODO',
				// 			'/language/en/e-control-at-fuel/CHANGELOG'
				// 		]
				// 	},
				// 	{
				// 		title: 'Wallpanel',   // required
				// 		path: '/language/en/Wallpanel/description',      // optional, link of the title, which should be an absolute path and must exist
				// 		collapsable: true, // optional, defaults to true
				// 		sidebarDepth: 1,    // optional, defaults to 1
				// 		children: [
				// 			'/language/en/Wallpanel/description',
				// 			'/language/en/Wallpanel/Login',
				// 			'/language/en/Wallpanel/ObjectTree',
				// 			'/language/en/Wallpanel/CHANGELOG'
				// 		]
				// 	},
				// ]
			},
			'/language/de/': {
				selectText: 'Sprache',
				label: 'Deutsch',
				ariaLabel: 'Sprachen',
				// nav: [
				// 	{
				// 		text: 'Adapter',
				// 		items: [
				// 			{
				// 				text: 'Fully Tablet Control',
				// 				link: '/language/de/Fully-Tablet-Control/description'
				// 			},
				// 			{
				// 				text: 'E-Control.at Fuel',
				// 				link: '/language/de/e-control-at-fuel/description'
				// 			},
				// 			{
				// 				text: 'Wallpanel',
				// 				link: '/language/de/Wallpanel/description'
				// 			},
				// 		]
				// 	}
				// ],
				// sidebar: [
				//
				// 	{
				// 		title: 'Fully Tablet Control',   // required
				// 		path: '/language/de/Fully-Tablet-Control/description',      // optional, link of the title, which should be an absolute path and must exist
				// 		collapsable: true, // optional, defaults to true
				// 		sidebarDepth: 1,    // optional, defaults to 1
				// 		children: [
				// 			'/language/de/Fully-Tablet-Control/description',
				// 			'/language/de/Fully-Tablet-Control/Login',
				// 			'/language/de/Fully-Tablet-Control/Ladegeraet',
				// 			'/language/de/Fully-Tablet-Control/brightness',
				// 			'/language/de/Fully-Tablet-Control/Bildschirmschoner',
				// 			'/language/de/Fully-Tablet-Control/Telegram',
				// 			'/language/de/Fully-Tablet-Control/Bewegungsmelder',
				// 			'/language/de/Fully-Tablet-Control/ObjectsTree',
				// 			'/language/de/Fully-Tablet-Control/camera_shot',
				// 			'/language/de/Fully-Tablet-Control/Vis-View',
				// 			'/language/de/Fully-Tablet-Control/TODO',
				// 			'/language/de/Fully-Tablet-Control/CHANGELOG',
				// 		]
				// 	},
				//
				// 	{
				// 		title: 'E-Control.at Fuel',   // required
				// 		path: '/language/de/e-control-at-fuel/description',      // optional, link of the title, which should be an absolute path and must exist
				// 		collapsable: true, // optional, defaults to true
				// 		sidebarDepth: 1,    // optional, defaults to 1
				// 		children: [
				// 			'/language/de/e-control-at-fuel/description',
				// 			'/language/de/e-control-at-fuel/TODO',
				// 			'/language/de/e-control-at-fuel/CHANGELOG'
				// 		]
				// 	},
				//
				// 	{
				// 		title: 'Wallpanel',   // required
				// 		path: '/language/de/Wallpanel/description',      // optional, link of the title, which should be an absolute path and must exist
				// 		collapsable: true, // optional, defaults to true
				// 		sidebarDepth: 1,    // optional, defaults to 1
				// 		children: [
				// 			'/language/de/Wallpanel/description',
				// 			'/language/de/Wallpanel/Login',
				// 			'/language/de/Wallpanel/ObjectTree',
				// 			'/language/de/Wallpanel/CHANGELOG'
				// 		]
				// 	},
				// ]
				nav: [
					{
						text: 'Adapter',
						ariaLabel: 'Sprachen Menu',
						items: translationArray['DE']
					},
				],
				sidebar: [
					{

						title: 'Fully Tablet Control',   // required
						path: '/language/de/Fully-Tablet-Control/01.description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: getSideBar(
							'/language/de/Fully-Tablet-Control/'
						),
					},
					{

						title: 'E-Control.at Fuel',   // required
						path: '/language/de/e-control-at-fuel/01.description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: getSideBar(
							'/language/de/e-control-at-fuel/'
						),
					},
					{

						title: 'Wallpanel',   // required
						path: '/language/de/Wallpanel/01.description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: getSideBar(
							'/language/de/Wallpanel/'
						),
					}
				],
				// sidebar: {
				// 	'/language/de/Wallpanel/': getSideBar(
				// 		'/language/de/Wallpanel/',
				// 		'/language/de/Wallpanel/01.description',
				// 		'Introduction',
				// 		true,
				// 		1,
				// 	),
				// 	'/language/de/e-control-at-fuel/': getSideBar(
				// 		'/language/de/e-control-at-fuel/',
				// 		'/language/de/e-control-at-fuel/01.description',
				// 		'E-Control.at Fuel',
				// 		false,
				// 		1,
				// 	),
				// 	'/language/de/Fully-Tablet-Control/': getSideBar(
				// 		'/language/de/Fully-Tablet-Control/',
				// 		'/language/de/Fully-Tablet-Control/01.description',
				// 		'Fully Tablet Control',
				// 		false,
				// 		1,
				// 	),
				// },
			},

		}
	},
	// /**
	//  * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
	//  */
	plugins: [
		['vuepress-plugin-code-copy', {
			align: 'bottom',
			staticIcon: true
		}
		],
		'@vuepress/last-updated',
		'@vuepress/back-to-top',
		'@vuepress/plugin-medium-zoom',
		'@vuepress/search'
	]
}

// Translate item array to all languages
/**
 *
 * @param {array} items
 */
function itemTranslator(items) {
	translationArray['EN'] = items;
	translationArray['DE'] = [];
	for (const item in items) {
		translationArray['DE'].push(
			{
				text: items[item].text,
				link: items[item].link.replace('en', 'de')
			})
	}
}

/**
 *
 * @param {string} folder  folder where the files are located
 * @param {string} defaultPath  default path to be called when clicking on the title in the sidebar
 * @param {string} title    Title to be displayed in the sidebar
 * @param {boolean} collapsable     Make sidebar collapsible
 * @param {number} sidebarDepth     set sidebar depth
 * @return {array} {{path, children: [], collapsable, sidebarDepth, title}[]}
 */
// function getSideBar(folder, defaultPath, title, collapsable, sidebarDepth) {
// 	let children = []
// 	const extension = ['.md'];
// 	let files = fs
// 		.readdirSync(path.join(`${__dirname}/../${folder}`))
// 		.filter(
// 			(item) =>
// 				item.toLowerCase() !== 'readme.md' &&
// 				fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
// 				extension.includes(path.extname(item))
// 		);
//
// 	for (const filesKey in files) {
// 		children.push(`${folder}${files[filesKey].replace(/.md/g, '')}`)
// 	}
//
// 	return [
// 		{
// 			title: title,
// 			path: defaultPath,
// 			collapsable: collapsable,
// 			sidebarDepth: sidebarDepth,
// 			children: children
// 		}
// 	];
// }

/**
 *
 * @param folder  folder where the files are located
 * @return {array} {[]}
 */
function getSideBar(folder) {
	let children = []
	const extension = ['.md'];
	let files = fs
		.readdirSync(path.join(`${__dirname}/../${folder}`))
		.filter(
			(item) =>
				item.toLowerCase() !== 'readme.md' &&
				fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
				extension.includes(path.extname(item))
		);

	for (const filesKey in files) {
		children.push(`${folder}${files[filesKey].replace(/.md/g, '')}`)
	}

	return children

}