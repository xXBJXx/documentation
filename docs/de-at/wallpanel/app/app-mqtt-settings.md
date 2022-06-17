---

# This control sidebar index

index: 2

# This is the icon of the page

icon: article

# This is the title of the article

title: MQTT Einstellungen

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

headerDepth: 1
---

## Einstellungsvorschau

Hier eine kleine Vorschau, was man einstellen kann

![app-mqtt-settings.gif](../../../.vuepress/public/media/wallpanel/app-mqtt-settings.gif)

## MQTT Haupt Einstellungen

wenn ihr die MQTT Verbindung von der App nutzen wollt, müsst ihr sie zuerst aktivieren, da sie standardmäßig deaktiviert ist.

![app-mqtt-settings.png](../../../.vuepress/public/media/wallpanel/app-mqtt-settings.png)

* <span style="color:#cf3424; fontSize:1.3em; font-weight:bold">MQTT Client</span>: Hier wird die MQTT Verbindung aktiviert oder deaktiviert.
* <span style="color:#cf3424; fontSize:1.3em; font-weight:bold">MQTT Broker Adresse</span>: Hier wird die MQTT Broker Adresse eingetragen wie ioBroker MQTT Broker/Client
  <span style="color:#ffa500">(</span>ioBroker ip Adresse<span style="color:#ffa500">)</span>
* <span style="color:#cf3424; fontSize:1.3em; font-weight:bold">Broker Port</span>: Hier wird die MQTT Broker Port eingetragen <span style="color:#ffa500">(</span>Standard Port
  1883<span style="color:#ffa500">)</span>
* <span style="color:#cf3424; fontSize:1.3em; font-weight:bold">Base Topic</span>: Hier wird der Base Topic eingetragen,
  z.B. <Badge text="wallpanel/samsung/" type="tip" vertical="middle"/>
  ::: warning Wichtig
  der Base Topic muss mit einem Schrägstrich <Badge text="/" type="danger" vertical="middle"/> enden. z.B. <Badge text="wallpanel/samsung/" type="tip" vertical="middle"/>
  ansonsten werden die Datenpunkte im ioBroker nicht richtig angelegt, z.B. <Badge text="samsungbattery" type="danger" vertical="middle"/> Was
  eigentlich <Badge text="samsung.battery" type="tip" vertical="middle"/> sein sollte.<br>
  <br>
  Im Adapter braucht ihr den letzten <Badge text="/" type="danger" vertical="middle"/> nicht anzugeben
  :::
* <span style="color:#cf3424; fontSize:1.3em; font-weight:bold">Username<span style="color:#ffa500">(</span>Optional<span style="color:#ffa500">)</span></span>: Hier wird der
  Username eingetragen wie
  z.B. <Badge text="iobroker" type="info" vertical="middle"/> Dieser ist aber optional, wenn ihr es setzen wollt, müsst ihr es dann auch im MQTT Adapter eingeben.
* <span style="color:#cf3424; fontSize:1.3em; font-weight:bold">Password<span style="color:#ffa500">(</span>Optional<span style="color:#ffa500">)</span></span>: Hier wird das
  Passwort eurer Wahl eingetragen wie
  z.B. <Badge text="12345" type="info" vertical="middle"/> Dieser ist aber optional, wenn ihr es setzen wollt, müsst ihr es dann auch im MQTT Adapter eingeben.
* <span style="color:#cf3424; fontSize:1.3em; font-weight:bold">Client ID</span>: Hier wird die Client-ID eingetragen, wie <Badge text="samsung Flur" type="tip" vertical="middle"/>
  diese ist nicht wichtig, die wird nur im MQTT Adapter angezeigt, welche Clients sich verbinden.

