---

# This control sidebar index

index: false

# This is the icon of the page

icon: article

# This is the title of the article

title: Beschreibung für Wallpanel

# Set author

author: xXBJXx

# Set writing time

date: 2022-05-24

# A page can have multiple categories

category:

- Wallpanel

# A page can have multiple tags

tag:

- Wallpanel

# The page’s sidebar heading rendering depth.

headerDepth: 1
---

<img :src="$withBase('/media/wallpanel/wallpanel.png#center')" alt="VuePress Logo">

[![GitHub release](https://img.shields.io/github/v/release/xXBJXx/ioBroker.wallpanel?include_prereleases&label=GitHub%20release&logo=github)](https://github.com/xXBJXx/ioBroker.wallpanel)
[![NPM version](https://img.shields.io/npm/v/iobroker.wallpanel.svg?logo=npm)](https://www.npmjs.com/package/iobroker.wallpanel)
[![NPM downloads](https://img.shields.io/npm/dm/iobroker.wallpanel.svg?logo=npm)](https://www.npmjs.com/package/iobroker.wallpanel)
![Installed](https://iobroker.live/badges/wallpanel-installed.svg)
<br>
<br>
[![NPM downloads](https://nodei.co/npm/iobroker.wallpanel.png)](https://www.npmjs.com/package/iobroker.wallpanel)

## <span style="color:red; fontSize:1.3em; font-weight:bold">Der Adapter benötigt eine Node.js Version >= 15.x</span>


## Einstellungsmöglichkeiten

* App:<br>
[![App](../../.vuepress/public/media/wallpanel/GooglePlayStore.png#navIcon)](app/app-description.md)
<br/>
* Adapter:<br>
[![App](../../.vuepress/public/media/wallpanel/adapter.png#navIcon)](admin-gui.md)
<br/>

## Adapter Beschreibung

Mit dem Adapter kann man ein paar Werte wie Helligkeit abfragen und über MQTT dann noch <br> zusätzlich Batterie stand und noch paar Sachen mehr abfragen diese Werter werden in
states <br> geschrieben und stehen zur Verfügung.<br>
Man kann auch ein paar Steuerbefehle an das Tablet senden, es kann z. B. die Helligkeit oder die <br> aktuelle URL verändern.

Es können mehrere Tablets gleichzeitig im Adapter eingestellt werden, die dann nach einander <br> abgefragt und natürlich auch gesteuert werden können.

Hier ist noch der Forum-Thread zu diesem Adapter: [Forum Post](https://forum.iobroker.net/topic/36438/test-adapter-wallpanel)

::: warning Achtung
<span style="color:orange; font-size:1.2em; font-weight: bold" >Dieser Adapter nutzt den Sentry.io Dienst, um mir als
Entwickler automatisch Ausnahmen und Codefehler sowie neue Geräteschemata zu melden.
Mehr Details siehe unten! [Sentry](/de/wallpanel/sentry)
</span>
:::


