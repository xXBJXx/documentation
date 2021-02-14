// const {description} = require('../../package')
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
		// repo: '',
		// editLinks: false,
		// docsDir: '',
		// editLinkText: '',
		logo: '/images/ioBroker.svg',
		smoothScroll: true,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				nav: [
					{
						text: 'Adapter',
						items: [
							{
								text: 'Fully Tablet Control',
								link: '/language/en/Fully-Tablet-Control/description'
							},
							{
								text: 'E-Control.at Fuel',
								link: '/language/en/e-control-at-fuel/description'
							},
							{
								text: 'Wallpanel',
								link: '/language/en/Wallpanel/description'
							},
						]
					}
				],
				sidebar: [
					{
						title: 'Fully Tablet Control',   // required
						path: '/language/en/Fully-Tablet-Control/description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: [
							'/language/en/Fully-Tablet-Control/description',
							'/language/en/Fully-Tablet-Control/Login',
							'/language/en/Fully-Tablet-Control/Ladegeraet',
							'/language/en/Fully-Tablet-Control/brightness',
							'/language/en/Fully-Tablet-Control/Bildschirmschoner',
							'/language/en/Fully-Tablet-Control/Telegram',
							'/language/en/Fully-Tablet-Control/Bewegungsmelder',
							'/language/en/Fully-Tablet-Control/ObjectsTree',
							'/language/en/Fully-Tablet-Control/camera_shot',
							'/language/en/Fully-Tablet-Control/Vis-View',
							'/language/en/Fully-Tablet-Control/TODO',
							'/language/en/Fully-Tablet-Control/CHANGELOG',
						]
					},
					{
						title: 'E-Control.at Fuel',   // required
						path: '/language/en/e-control-at-fuel/description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: [
							'/language/en/e-control-at-fuel/description',
							'/language/en/e-control-at-fuel/TODO',
							'/language/en/e-control-at-fuel/CHANGELOG'
						]
					},
					{
						title: 'Wallpanel',   // required
						path: '/language/en/Wallpanel/description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: [
							'/language/en/Wallpanel/description',
							'/language/en/Wallpanel/Login',
							'/language/en/Wallpanel/ObjectTree',
							'/language/en/Wallpanel/CHANGELOG'
						]
					},
				]
			},
			'/language/de/': {
				selectText: 'Sprache',
				label: 'Deutsch',
				ariaLabel: 'Sprachen',
				nav: [
					{
						text: 'Adapter',
						items: [
							{
								text: 'Fully Tablet Control',
								link: '/language/de/Fully-Tablet-Control/description'
							},
							{
								text: 'E-Control.at Fuel',
								link: '/language/de/e-control-at-fuel/description'
							},
							{
								text: 'Wallpanel',
								link: '/language/de/Wallpanel/description'
							},
						]
					}
				],
				sidebar: [
					{
						title: 'Fully Tablet Control',   // required
						path: '/language/de/Fully-Tablet-Control/description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: [
							'/language/de/Fully-Tablet-Control/description',
							'/language/de/Fully-Tablet-Control/Login',
							'/language/de/Fully-Tablet-Control/Ladegeraet',
							'/language/de/Fully-Tablet-Control/brightness',
							'/language/de/Fully-Tablet-Control/Bildschirmschoner',
							'/language/de/Fully-Tablet-Control/Telegram',
							'/language/de/Fully-Tablet-Control/Bewegungsmelder',
							'/language/de/Fully-Tablet-Control/ObjectsTree',
							'/language/de/Fully-Tablet-Control/camera_shot',
							'/language/de/Fully-Tablet-Control/Vis-View',
							'/language/de/Fully-Tablet-Control/TODO',
							'/language/de/Fully-Tablet-Control/CHANGELOG',
						]
					},
					{
						title: 'E-Control.at Fuel',   // required
						path: '/language/de/e-control-at-fuel/description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: [
							'/language/de/e-control-at-fuel/description',
							'/language/de/e-control-at-fuel/TODO',
							'/language/de/e-control-at-fuel/CHANGELOG'
						]
					},
					{
						title: 'Wallpanel',   // required
						path: '/language/de/Wallpanel/description',      // optional, link of the title, which should be an absolute path and must exist
						collapsable: true, // optional, defaults to true
						sidebarDepth: 1,    // optional, defaults to 1
						children: [
							'/language/de/Wallpanel/description',
							'/language/de/Wallpanel/Login',
							'/language/de/Wallpanel/ObjectTree',
							'/language/de/Wallpanel/CHANGELOG'
						]
					},
				]

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
