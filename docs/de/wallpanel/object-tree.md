---

# This control sidebar index

index: 3

# This is the icon of the page

icon: article

# This is the title of the article

title: Datenpunkte

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

headerDepth: 2
---

## State Übersicht

Hier zeige ich euch eine Übersicht über die verschiedenen States, die der Wallpanel-Objekt-Tree anbietet.
Ich fange mit den Standard-States an, die nur zur Anzeige gedacht sind.
![wallpanel Objekts](../../.vuepress/public/media/wallpanel/wallpanelObjekts.png)

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">brightness</span>: Hier wird der Helligkeitswert des Gerätes von 0 bis 255 angezeigt.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">camera</span>: Hier wird angezeigt, ob die Kamera aktiv ist oder nicht.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">connected</span>: Zeigt an, ob der Adapter mit dem App verbunden ist.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">currentUrl</span>: Hier wird die URL angezeigt, die der Browser aktuell anzeigt.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">ip</span>: Hier wird die IP-Adresse des Gerätes angezeigt.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">json</span>: Hier werden alle Daten, die der Adapter vom Tablet sammelt in einem JSON-Objekt angezeigt.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">lastInfoUpdate</span>: Hier wird die Zeit angezeigt, wann das letzte Update vom Adapter erfolgte.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">mjpegStream</span>: Hier wird die MJPEG-Stream-Url angezeigt.
  <span style="color:#ffa500">(</span> Voraussetzung: mjpeg Stream ist in der App aktiviert <span style="color:#ffa500">)</span>
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">screenOn</span>: Hier wird angezeigt, ob der Bildschirm aktiv ist oder nicht.

## Command’s:

Unter Command’s werden alle Befehle angezeigt, die der Adapter an die Wallpanel App sendet, kann.
![wallpanel-command](../../.vuepress/public/media/wallpanel/wallpanel-command.png)

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">brightness</span>: Hier kann der Helligkeitswert des Gerätes geändert werden.
  <span style="color:#ffa500">(</span> 0 bis 255 <span style="color:#ffa500">)</span>
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">camera</span>: Hier kann die Kamera aktiviert werden das deaktiviert ist vom Adapter aus nicht möglich. Der state
  ist deswegen ein Button.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">clearCache</span>: Hier kann der Cache des Gerätes gelöscht werden.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">eval</span>: Hier kann ein Script ausgeführt werden.

:::tip

  ```js 
  alert('Hallo ich bin eine JavaScript-Funktion');
  ```

Wenn man das ausführt, wird ein Fenster auf dem Bildschirm angezeigt, der Text, den man in der Funktion mit gegeben hat, wird in dem Fenster angezeigt.
:::

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">relaunch</span>: Hier wird die aktuelle Seite wieder auf die Startseite des Browsers gesetzt.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">reload</span>: Hier wird die aktuelle Seite neu geladen.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">settings</span>: Hier wird die Einstellungen der App im Browser geöffnet.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">speak</span>: Hier kann ein Text eingegeben werden das dann auf dem Gerät gesprochen wird.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">url</span>: Hier kann eine URL eingegeben werden, die auf dem Gerät geladen wird.

::: tip
kleine Information an alle, man kann über den Url Command auch eine App starten, wenn diese auf dem Tablet installiert ist.
Dazu müsst ihr einfach in die Eingabe von der Url z. B. diesen Link eingeben:

* Ring App:

``` 
intent:#Intent;launchFlags=0x10000000;component=com.ringapp/.ui.activities.LoginActivity;end 
```

* Calendar (Samsung)

``` 
  intent:#Intent;launchFlags=0x10000000;component=com.samsung.android.calendar/com.android.calendar.AllInOneActivity;end
```

[Hier](https://tinyurl.com/2qnqodkq) kann man noch weitere links finden, ihr müsst da einfach herumprobieren was bei euch funktioniert.
:::

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">urlAudio</span>: Hier kann eine Audio-URL eingegeben werden, die auf dem Gerät abgespielt wird.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">volume</span>: Hier kann der Lautstärkewert von 0 % bis 100 % geändert werden.
  <span style="color:#ffa500">(</span> Hat kein Effekt auf die TTS Lautstärke <span style="color:#ffa500">)</span>

  ::: warning Achtung
  hat in meinen Tests keinen Effekt gehabt.
  :::
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">wake</span>: Schaltet den Bildschirm an oder aus.

  ::: warning Achtung
  der Bildschirm wird nicht ausgeschaltet, bevor Androids Bildschirm Timeout beendet ist
  :::

## MQTT states Übersicht

Hier sind die states, die vom MQTT Adapter abgefragt werden können.

::: warning Achtung
<span style="color:orange; font-size:1.5em; font-weight: bold" >MQTT Adapter muss dafür installiert und sein und MQTT in der [Wallpanel App](/de/wallpanel/app/mqtt-settings)
eingerichtet sein.</span>
:::

![wallpanel-mqtt-sensor](../../.vuepress/public/media/wallpanel/wallpanel-mqtt-sensor.png)

::: warning Achtung
nicht alle MQTT Sensoren sind auf den verschiedenen Geräten verfügbar.
:::

### battery <span style="color:#ffa500">(</span>Batterie<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">acPlugged</span>: Hier wird angezeigt, ob das Gerät mit dem AC Ladegerät verbunden ist.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">battery</span>: Hier wird der Ladezustand des Gerätes angezeigt.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">charging</span>: Hier wird angezeigt, ob das Gerät gerade geladen wird.
* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">usbPlugged</span>: Hier wird angezeigt, ob das Gerät mit dem USB Ladegerät verbunden ist.

### face <span style="color:#ffa500">(</span>Gesichtserkennung<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">face</span>: Hier wird angezeigt, ob die Kamera ein Gesicht erkannt hat.

### light <span style="color:#ffa500">(</span>Beleuchtungsstärke<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">id</span>: Die ID zeigt die Geräte ID von dem sensor an.

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">light</span>: Hier wird die aktuelle Beleuchtungsstärke in Lux angezeigt.

### magneticField <span style="color:#ffa500">(</span>Magnetische Feldstärke<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">magneticField</span>: Hier wird die aktuelle Magnetische Feldstärke in µT angezeigt.

### motion <span style="color:#ffa500">(</span>Bewegungsmelder<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">motion</span>: Hier wird angezeigt, ob die Kamera eine Bewegung erkannt hat.

### qrCode <span style="color:#ffa500">(</span>QR Code<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">qrCode</span>: Hier wird das erkannte QR Code angezeigt.

### pressure <span style="color:#ffa500">(</span>Luftdruck<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">pressure</span>: Hier wird der aktuelle Luftdruck in hPa angezeigt.

### temperature <span style="color:#ffa500">(</span>Temperatur<span style="color:#ffa500">)</span>

* <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">temperature</span>: Hier wird die aktuelle Temperatur in °C angezeigt.