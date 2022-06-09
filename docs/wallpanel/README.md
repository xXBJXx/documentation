---

# This control sidebar index

index: 0

# This is the icon of the page

icon: article

# This is the title of the article

title: Description for Wallpanel

# Set author

author: xXBJXx

# Set writing time

date: 2022-05-25

# A page can have multiple categories

category:

- Wallpanel

# A page can have multiple tags

tag:

- Wallpanel

# The page’s sidebar heading rendering depth.

headerDepth: 2
---

<img :src="$withBase('/media/wallpanel/wallpanel.png#center')" alt="Wallpanel logo">

[![GitHub release](https://img.shields.io/github/v/release/xXBJXx/ioBroker.wallpanel?include_prereleases&label=GitHub%20release&logo=github)](https://github.com/xXBJXx/ioBroker.wallpanel)
[![NPM version](https://img.shields.io/npm/v/iobroker.wallpanel.svg?logo=npm)](https://www.npmjs.com/package/iobroker.wallpanel)
[![NPM downloads](https://img.shields.io/npm/dm/iobroker.wallpanel.svg?logo=npm)](https://www.npmjs.com/package/iobroker.wallpanel)
![Installed](https://iobroker.live/badges/wallpanel-installed.svg)
[![NPM downloads](https://nodei.co/npm/iobroker.wallpanel.png)](https://www.npmjs.com/package/iobroker.wallpanel)

## <span style="color:red; fontSize:1.3em; font-weight:bold">The adapter requires a Node.js version >= 16.x</span>

## Setting options

* [App](app/app-description.md)
* [Adapter](admin-gui.md)

## Adapter Description

With the adapter, you can query a few values such as brightness and about MQTT then still <br> additionally battery level
and a few more things, query these values written in states <br> and are available.<br>
One can also send a few control commands to the tablet, it can e.g., the brightness or the <br> current URL change.

Several tablets can be set in the adapter at the same time, which can then queried <br> one after the other and can of course also be controlled.

Here is still the forum thread to this Adapter: [Forum Post](https://forum.iobroker.net/topic/36438/test-adapter-wallpanel)

::: warning Attention
<span style="color:orange; font-size:1.2em; font-weight: bold" >This adapter uses the Sentry.io service to automatically
Developer to automatically report exceptions and code errors, as well as new device schemas.
See below for more details! [Sentry](/wallpanel/sentry)
</span>
:::


